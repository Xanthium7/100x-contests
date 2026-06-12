// const fs = require("fs/promises");


// const delay = (ms, msg, shouldFail) => {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(shouldFail){
//                 rej("Operation Failed")
//             }else{
//                 res(msg)
//             }
//         }, ms)
//     })
// }

// delay(1000, "Sucess", true).then((msg) => {
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// })

// --------------------------------------------------------


// const fs = require('fs')

// const fsPromise = (file) => {
//     return new Promise((res, rej) => {
//         fs.readFile(file, 'utf-8', (err, data) => {
//             if(err){
//                 rej(err.message)
//             }else{
//                 res(data)
//             }
//         })
//     })
// }



// fsPromise("hi.txt").then((data) => {
//     console.log(data)
// })


// -------------------------------------------------


// function unreliableUpload(file) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() < 0.7) reject(new Error(`Upload failed: ${file}`));
//       else resolve(`Uploaded: ${file}`);
//     }, 500);
//   });
// }



// const retry = async (fn, file, attempt) => {
//     for (let i = 0; i < attempt; i++) {
//         try {
//             return await fn(file);
//         } catch (err) {
//             if (i === attempt - 1) {
//                 throw new Error('Exhausted all attempts');
//             }
//         }
//     }
// }


// retry(unreliableUpload, "dummyFIle", 3).then((msg) => {
//     console.log(msg)
// }).catch((err) => {
//     console.log(err)
// })


// ----------------------------------------------------------------
// const fs = require("fs/promises");

// async function totalLength(files) {
//   let total = 0;
//   files.forEach(async (file) => {
//     const data = await fs.readFile(file, "utf-8");
//     total += data.length;
//   });
//   return total;
// }

// totalLength(["a.txt", "b.txt", "c.txt"]).then(console.log); // 0 ???

// here forEach dont wait for promeses to reolved and eimmedlty end it promised goines in waiting stage - so we use Promise.all() or a normal for loop