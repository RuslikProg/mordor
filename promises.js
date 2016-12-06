// function applyForVisa(documents){
//     console.log('Обработка заевления..');
//     let promise= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         Math.random() > 0 ? resolve({}):reject('В визе отказано!');
//          },2000);
//      });
//      return promise;
// }

// function getVisa(visa){
//   console.info('Viza poly4ena')
//         return new Promise(function(resolve,reject){
//            setTimeout(()=>resolve(visa),2000);
//         }) ;
// }

// function bookHotel(visa){
//     console.log(visa)
//     console.log('Бронируем отель');
//     return Promise.resolve(visa);
// }

// function buyTickets(booking){
//     console.log('покупаем билети');
//     console.log('Bron`',booking);
// }

// applyForVisa({})
//     .then(getVisa)
//     .then(bookHotel)
//     .then(buyTickets)
//     .catch(error=>console.error(error));








'use strict';


let movieList = document.getElementById('movies');

function addMovieToList(movie) {
    let img = document.createElement('img');
    img.src = movie.Poster;
    movieList.appendChild(img);
}

function getData(url) {
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json.Search);
            } else {
                reject(xhr.statusText);
            }
        };
        
        xhr.onerror = function(error) {
            reject(error);
        };
        
        xhr.send();
    });
}


 document.getElementById('test').onchange=function(tex){
  let search   = document.getElementById('test').value;  


getData(`http://www.omdbapi.com/?s=${search}`)
    .then(movies=>movies.forEach(movie=>addMovieToList(movie)));
 }

// let batman = getData('http://www.omdbapi.com/?s=batman');
// let superman = getData('http://www.omdbapi.com/?s=superman');
// let halk = getData('http://www.omdbapi.com/?s=halk');
// let starWar= getData('http://www.omdbapi.com/?s=star+war');


// batman
//     .then(movies =>
//         movies.forEach(movie =>
//             addMovieToList(movie)))
//     .catch(error => console.error(error));
    
// superman
//     .then(movies =>
//         movies.forEach(movie =>
//             addMovieToList(movie)))
//     .catch(error => console.error(error));

// Promise.race([batman, superman,halk,starWar])
//     .then(movies =>
//         movies.forEach(movie =>
//             addMovieToList(movie)))
//     .catch(error => console.error(error));