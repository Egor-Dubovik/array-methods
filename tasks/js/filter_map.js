// Задача #1 Rating filtering

// Ограничения: выполните задание используя функции filter и map.
// При этом не используйте промежуточных переменных,
// чтобы сохранить результат от filter, а потом уже map
// Погуглите что такое chain/chainable

// Задание: написать функцию,которая отфильтрует в новый массив videos только те видео
// у которых рейтинг равен "5.0" и вернёт их (пременную videos можно не создавать).
// В новом массиве оставьте только 2 поля: id, title 
//-----------------------------------------------------------------------------------
let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.0,
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

//* First solution - O(n^2)
/* const ratingFiltering = (releases) => {
  return releases.filter(video => video.rating == 5.0)
    .map(video => {
      for (let key in video) {
        if (key !== "id" && key !== "title") delete video[key];
      }

      return video;
    });
}; */


//* Second solution - O(n)
/* const ratingFiltering = (releases) => {
  return releases
    .filter(video => video.rating == 5.0)
    .map(video => { id, title });
}; */


// const videos = ratingFiltering(newReleases);
// console.log(videos);