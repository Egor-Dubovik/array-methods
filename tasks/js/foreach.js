// Задача #2 Rating filtering

// Ограничения: выполните задание используя только функцию forEach.

// Задание: отфильтруйте в новый массив videos только те видео
// у которых рейтинг равен "5.0".
// В новом массиве оставьте только 3 поля: name, id и title

//-----------------------------------------------------------------------------------
import { movieLists, boxarts } from "./database.js";

//* O(n^2)
// const ratingFiltering = (movieLists) => {
//   let filteringVideos = [];

//   movieLists.forEach(list => {
//     list.videos.forEach(video => {
//       if (video.rating == 5.0) {
//         const name = list.name;
//         const { id, title } = video;
//         filteringVideos.push({ name, id, title });
//       }
//     })
//   });

//   return filteringVideos;
// };


// const videos = ratingFiltering(movieLists);
// console.log(videos);
//========================================================================================================================================================

// Задача #5

// Ограничения: выполните задание используя forEach
// Задание: достать объект с самой большой площадью картинки
// width: 425, height: 150,

//* First solution O(n)
// const showoLargestObject = (boxarts) => {
//   let arr = [];

//   boxarts.forEach(el => {
//     if (arr.length === 0) {
//       arr.push(el);
//     } else {
//       const currentSquare = el.width * el.height;
//       const biggestSquare = arr[0].width * arr[0].height;

//       if (currentSquare > biggestSquare) {
//         arr.length = 0;
//         arr.push(el);
//       }
//     }
//   });


//   return arr[0];
// }

//* Second solution O(n)
// const showoLargestObject = (boxarts) => {
//   return [...boxarts].sort((a, b) => {
//     const firstSquare = a.width * a.height;
//     const secondSquare = b.width * b.height;

//     return secondSquare - firstSquare;
//   })[0];
// };


// console.log(showoLargestObject(boxarts));