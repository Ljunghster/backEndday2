// let arr = [1, 2, 3, 4]
// ... three dots then rest is a function, gives everything else, in this case 3 and 4
// let [ num1, num2, ...rest ]

// console.log(rest)
let movies = require('./movies.js')

console.log(movies)

let food = require('./food.js')

console.log(food)

let songs = require('./songs.js')

console.log(songs)

let games = require('./games.js')

console.log(games)

const fs = require('fs')
// const movies = require('./movies.js')
// const food = require('./food.js')
// const games = require('./games.js')
// const songs = require('./songs.js')

let [ , , category, ... favoriteArray ] = process.argv
// let favorite = `${favoriteArray.join('')},`

if (['movies', 'foods', 'songs', 'games'].includes(category)) {
    fs.appendFile(`${category}.txt`, `${favoriteArray.join(' ')}, `, err => {
        if (err) {console.log(err) }
    })
}
// switch (category) {
//     case 'movie':
//         fs.appendFile('movie.txt', favorite, err => {
//             if (err) {console.log(err
//                 )}
//         })
//         break
//     case 'food':
//         fs.appendFile('food.txt', favorite, err => {
//             if (err) {console.log(err
//                 )}
//         })
//         break
//     case 'songs':
//         fs.appendFile('songs.txt', favorite, err => {
//             if (err) {console.log(err
//                 )}
//         })
//         break
//     case 'games':
//         fs.appendFile('games.txt', favorite, err => {
//             if (err) {console.log(err
//                 )}
//         })
//         break
// }














// let movies = require('./movies.js')

// console.log(movies)

// let food = require('./food.js')

// console.log(food)

// let songs = require('./songs.js')

// console.log(songs)

// let games = require('./games.js')

// console.log(games)