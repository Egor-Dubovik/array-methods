// Задача #1 Rating filtering

// Ограничения: выполните задание используя функции filter и map.
// При этом не используйте промежуточных переменных,
// чтобы сохранить результат от filter, а потом уже map
// Погуглите что такое chain/chainable

// Задание: написать функцию,которая отфильтрует в новый массив videos только те видео
// у которых рейтинг равен "5.0" и вернёт их (пременную videos можно не создавать).
// В новом массиве оставьте только 2 поля: id, title 
//-----------------------------------------------------------------------------------
import { newReleases } from "./database.js";

//* First solution - O(n^2)
// const ratingFiltering = (releases) => {
//   return releases.filter(video => video.rating == 5.0)
//     .map(video => {
//       for (let key in video) {
//         if (key !== "id" && key !== "title") delete video[key];
//       }

//       return video;
//     });
// };


//* Second solution - O(n)
// const ratingFiltering = (releases) => {
//   return releases
//     .filter(video => video.rating == 5.0)
//     .map(({ id, title }) => ({ id, title }));
// };


// const videos = ratingFiltering(newReleases);
// console.log(videos);