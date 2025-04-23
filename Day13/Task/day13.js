// doManualLogin: async (params: any): Promise<APIResponseModal> => {
//     return new Promise((resolve, reject) => {
//         ApiService.postApi(ENDPOINTS.AUTH.LOGIN, params)
//             .then((res: any) => {
//                 console.log("Login response :", res);
//                 if (res?.data) {
//                     resolve({
//                         isSuccess: true,
//                         data: res.data,
//                         message: res.message,
//                     });
//                 }
//                 reject({ ...res, isSuccess: false });
//             })
//             .catch((err) => {
//                 console.log("error in login api call", err);
//                 reject({ ...err, isSuccess: false });
//             });
//     });
// },
/**
 * function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback("Here is your data");
  }, 2000);
}

fetchData((data) => {
  console.log(data); // "Here is your data"
});
 callback hell
loginUser(user => {
  getUserProfile(user, profile => {
    getUserPosts(profile, posts => {
      console.log(posts);
    });
  });
});

promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) resolve("Data received");
      else reject("Something went wrong");
    }, 2000);
  });
};

fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));

  async await 

  const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Data is ready!"), 2000);
  });
};

const getData = async () => {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

getData();


 */

const user = {
  name: "Ram",
};
const user2 = {
  name: "Ram",
};
const user3 = user;
// console.log(this);
function fun() {
  console.log(this);
}
// fun();
// console.log(module);
// console.log(user === user3)
// console.log("hello world")
// console.log(globalThis)

// callback -> callback function is type of function which is passed as a parameter
// to any function so that it call be called when it is needed

// function sum(x, y) {
//   console.log(x + y);
// }

// function calculator(a, b, callback) {
//   // successful
//   if(a % 2 === 0){
//     callback(a,b);
//   }
//   else console.log('i am not calling the callback ');
// }
// calculator(5, 6, sum);
// calculator(4, 6, (a, b) => {
//   console.log(a * b);
// });


// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) resolve("Data received");
//       else reject("Something went wrong");
//     }, 2000);
//   });
// };

// fetchData()
//   .then(data => console.log(data))
//   .catch(err => console.error(err));
// async function name() {
//   const res = await fetchData();
// }

const a = [10, 20, 30, 40, 50];
// a.map()

const x = a.forEach((value, index, arr) => {
  // console.log(value);
  // console.log(index)
  // console.log(arr);
  return true;
})
// console.log(x);