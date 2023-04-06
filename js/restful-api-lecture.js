import {setFavorite, patchFavorite, deleteFavorite, getFavorites, getFavorite} from "./movies.js";

(async ()=>{
    document.querySelector('button').addEventListener('click', async function () {
        const title = document.querySelector('#title').value;
        const genre = document.querySelector('#genre').value;
        const rating = parseFloat(document.querySelector('#rating').value);
        let movieData = {
            title,
            genre,
            rating,
        };
        let result = await setFavorite(movieData);
        console.log(result);
    });

    // let body = {
    //     "rating": 3,
    // }
    // await patchFavorite(4, body);
    // await deleteFavorite(4);
    let movies = await getFavorites();
    console.log(movies);
    let movie = await getFavorite(4);
    console.log(movie);


})();
