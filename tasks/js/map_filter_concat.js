// Задача #4 Rating filtering

// Ограничения: выполните задание используя map, filter, concat

// Задание: достать массивы boxarts, где width === 150,
// результат должен быть вида { id: , title: , boxart: },
// где в boxart должен быть url картинок
//-----------------------------------------------------------------------------------
import { movieUrlLists } from "./database.js";

//* O(n^2)
// const ratingFiltering = (movieLists) => {
//   const b = movieLists.map(el => el.videos);
//   const videosArr = [].concat(...b);

//   return videosArr.map(video => {
//     const boxart = video.boxarts
//       .filter(param => param.width === 150 ? true : false)
//       .map(param => param.url);

//     const { id, title } = video;
//     return { id, title, boxart };
//   });
// };


// const videos = ratingFiltering(movieUrlLists);
// console.log(videos);