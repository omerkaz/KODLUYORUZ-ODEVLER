import axios from "axios";
import fetch from "node-fetch";

// Birinci Yöntem

export default async function getData(user_id) {
    if(isNaN(user_id)){
        return new Error("This is not a number")
    }
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    const {data: posts} = await axios(`https://jsonplaceholder.typicode.com/posts/${user_id}`)
    user.posts = posts

    return user
}

// İkinci Yöntem

// function getData(user_id) {
//   if (isNaN(user_id)) {
//     return new Error("This is not a number");
//   }

//   return new Promise(async (resolve, reject) => {
//     const userData = await fetch(
//       `https://jsonplaceholder.typicode.com/users/${user_id}`
//     ).then((data) => data.json());

//     const userPosts = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${user_id}`
//     ).then((data) => data.json());

//     // const userData = await (
//     //   await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)
//     // ).json();

//     // const userPosts = await (
//     //   await fetch(`https://jsonplaceholder.typicode.com/posts/${user_id}`)
//     // ).json();

//     userData.posts = userPosts;
//     resolve(userData);
//     reject("Bir sorun oluştu");
//   });
// }

// export default getData;

// Üçüncü Yöntem

// const getUser = async (user_id) => {
//   const { data: user } = await axios(
//     `https://jsonplaceholder.typicode.com/users/${user_id}`
//   );
//   return { user };
// };
// const getPosts = async (user_id) => {
//   const { data: posts } = await axios(
//     `https://jsonplaceholder.typicode.com/posts/${user_id}`
//   );
//   return { posts };
// };

// async function getData(id) {
//   try {
//     let resultData = await getUser(id);
//     let resultPosts = await getPosts(id);
//     resultData.posts = resultPosts;

//     console.log(resultData);
//   } catch (e) {
//     console.log(e);
//   }
// }
