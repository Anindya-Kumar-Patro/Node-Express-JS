const {readFile, writeFile} = require('fs')
const util = require('util')

// Alternative method to promisify
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

const start = async() => {
    try {
        // const first = await getText('./content/first.txt');
        const first = await readFilePromise('./content/first.txt', 'utf-8');
        await writeFilePromise('./content/second.txt', "hello this is the 2nd file through async chapter")
        const second = await readFilePromise('./content/second.txt', 'utf-8');

        console.log(first, second);
    } catch (error) {
        console.log(error)
    }
    
}

start()