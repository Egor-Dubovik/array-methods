// Задача #2 Rating filtering

// Ограничения: выполните задание используя только функцию forEach.

// Задание: отфильтруйте в новый массив videos только те видео
// у которых рейтинг равен "5.0".
// В новом массиве оставьте только 3 поля: name, id и title

//-----------------------------------------------------------------------------------
import { movieLists } from "./database.js";

const ratingFiltering = (movieLists) => {
  let filteringVideos = [];

  movieLists.forEach(list => {
    list.videos.forEach(video => {
      if (video.rating == 5.0) {
        const name = list.name;
        const { id, title } = video;
        filteringVideos.push({ name, id, title });
      }
    })

  });

  return filteringVideos;
};


const videos = ratingFiltering(movieLists);
console.log(videos);