/*

* Task todo | Monday
* Time & Space complexity
* Searching and sorting
* Rest, spread operator
* Time Complexity Hierarchy
-------------------------------------------------------------------------------------
* Linear Search -> TC in worst case -> O(n)
* Binary Search -> O(log n)
* Bubble sort -> O(n^2)
* Merge Sort -> O(n log n)
* Quick Sort -> O(n^2)
* Time Complexity Hierarchy - O(1) -> O(log n) -> O(⩗n) -> O(n) -> O(n log n) -> O(n^2) -> O(2^n)

Binary Search

int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
low = 0;
high = 9

mid = (high + low) / 2  Divide and conquer approach   Time Complexity = O(log(n)) and space complexity = O(1)
mid = 4
arr[mid] = 5
search element = 9
low = mid + 1 = 4 + 1 = 5
search element = 2
high = mid - 1 = 4 - 1 = 3
while(low <= high)

-------------------------------------------------------------------------------------------------------

ex ->
int arr[] = {4, 11, 13, 23, 47, 98, 102}
target = 47;

Step 1 ->
low = 0;
high = 6;
mid = (low + high) / 2 = (0 + 6) / 2 = 3
arr[mid] = 23;
(arr[mid] < target)
then, low = mid + 1 = 3 + 1 = 4

Step 2 -> 
low = 4
high = 6
mid = (l + h) / 2 = (4 + 6) / 2 = 10 / 2 = 5
arr[mid] = 98
(arr[mid] > target)
then, high = mid - 1 = 5 - 1 = 4

step 3 ->
low = 4
high = 4
mid = (l + h) / 2 = (4 + 4) / 2 = 4
arr[mid] = 47
(arr[mid] == target)
then, return mid

--------------------------------------------------------------------------------

Bubble Sort

Bubble Sort -> main principle is swap 2 numbers

int temp = a;
int a = b;
int b = temp;

Example 1.

int arr[] = {9, 1, 3, 4, 10, 5, 6};    ----> Original array

int arr[] = {1, 3, 4, 5, 6, 9, 10};    ----> after sorting the array

1. Technique -> swap 2 adjacent number by 1st Pass & 2nd Pass and so on...

2. Explanation -> swap(arr[i] > arr[i + 1]);

Conclusion -> After every pass the maximum element reaches to the end.

3. Optimization ->

4. Complexity

---------------------------------------------------------------------------------------------------------

int arr[] = {9, 1, 3, 4, 10, 5, 6};    ----> Original array

1st Pass ->

{9, 1, 3, 4, 10, 5, 6};  ----> Original array

{1, 9, 3, 4, 10, 5, 6};

{1, 3, 9, 4, 10, 5, 6};

{1, 3, 4, 9, 10, 5, 6};

{1, 3, 4, 9, 10, 5, 6};

{1, 3, 4, 9, 5, 10, 6};

{1, 3, 4, 9, 5, 6, 10};    ---> 1st Pass complete

2nd Pass ->

{1, 3, 4, 9, 5, 6, 10};

{1, 3, 4, 9, 5, 6, 10};

{1, 3, 4, 9, 5, 6, 10};

{1, 3, 4, 5, 9, 6, 10};

{1, 3, 4, 5, 6, 9, 10};  ----> after sorting the array

************************************************************************************************************************************

Example 2. Worst case scenario

int arr[] = {5, 4, 3, 2, 1};   ---> Original array

int arr[] = {1, 2, 3, 4, 5};   ---> after sorting the array

1st Pass ->

{5, 4, 3, 2, 1};   ---> Original array

{4, 5, 3, 2, 1};

{4, 3, 5, 2, 1};

{4, 3, 2, 5, 1};

{4, 3, 2, 1, 5};    ---> 1st Pass complete

2nd Pass ->

{3, 4, 2, 1, 5};

{3, 2, 4, 1, 5};

{3, 2, 1, 4, 5};    ---> 2nd Pass complete

no need to check comparison with 4 and 5 element because we done it already in 1st Pass

3rd Pass ->

{2, 3, 1, 4, 5};

{2, 1, 3, 4, 5};    ---> 3rd Pass complete

no need to check comparison with 3, 4 and 5 element because we done it already in 2nd Pass

-------------------------------------------------------------------------------------------------------

4th Pass ->

{1, 2, 3, 4, 5};    ----> after sorting the array


*****************************************************************************************************************

-> if 'n' element in the array -> 'n - 1' are the maximum passes.

-> After every pass, we need to apply bubble sort(swap 2 number) on the unsorted elements only & we do not need to check the 'largest'.


Coding implementation of bubble sort ->

Nested loops

-> Outer loop will stand for no. of passes.

-> Inner loop will do the swapping.


*********************************************************************************************************************

Time complexity -> O(n * n) -> worst case

*************************************************************************************************************

Maximum no of swaps in worst case in Bubble sort ->

worst case -> means array is given in descending order.

no of swaps = no of operation

If size of array is 'n' ->

-> n(n - 1) / 2


**************************************************************************************************************

-> How to optimize the bubble sort in the case of nearly sorted arrays?

Solution ->

Check if array after every pass is already sorted or not with the help of a checkmark?


*********************************************************************************************************************

Time complexity in best case -> After completing all the swapping flag is still true.

-> Outer loop will run only 1 time.

   0 <= i <= n - 2 -> n - 1 baar chalega.

-> Inner loop will run for 4 times.  No of operation done is 4.

i = 0 -> n - 1 baar

i = 1 -> n - 2 baar

i = 2 -> n - 3 baar

i = 3 -> n - 4 baar

i = 4 -> n - 5 baar

"   "    "     "

-> no of operations  = n - 1 + n - 2 + n - 3 + n - 4 + ........  + 2 + 1 

                     = (n - 1) * n / 2

                     = O((n * n) / 2 - n / 2 )

                     = O(n * n) / 2

                     = O(n * n)

flag = true;

TC = O(n)


******************************************************************************************************************


Time complexity in average case ->

O(n * n)


***************************************************************************************************

Time Complexity of bubble sort in all the cases are -->

1. Best case      -> O(n)

2. Average case   -> O(n * n)

3. Worst case     -> O(n * n)


*************************************************************************************************************

Space Complexity of bubble sort in all the cases are --> constant i.e O(1)

-> Means that no extra space is used under heap memory. Or you can say to store an array.

1. Best case      -> O(1)

2. Average case   -> O(1)

3. Worst case     -> O(1)

*********************************************************************************************************************

Que -> Is Bubble Sort Stable ?

Answer is yes, iff relative order maintained after sorting the original array.

Stable Sort ??? 

Ex -> if whatever duplicate element comes first then the final sorted array duplicate element also comes first.

   just like the following example where, element 2 is comes before 2' therefore under sorted array also comes in the same order.

int arr[] = {1, 2, 5, 2', 4};  Original array


int arr[] = {1, 2, 2', 4, 5};  Stable Sort

*****************************************************************************************************************

Conclusion ->

Bubble Sort -> Unsorted array -> ascending order

*******************************************************************************************************************



*/


