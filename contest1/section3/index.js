// Q1

// const fs = require('fs');
// let data = fs.readFileSync('user.json', { encoding: 'utf8', flag: 'r' });
// data = JSON.parse(data)

// emails = []

// data.map((u) => {
//     emails.push(u.email)
// })

// console.log(emails)

// fs.writeFileSync("emails.txt", JSON.stringify(emails));

// -------------------------------

// Q2

// const fs = require("fs");
// let data = fs.readFileSync("marks.json", { encoding: "utf8", flag: "r" });
// data = JSON.parse(data);

// marks = [];
// h = 0;
// l = 100;

// s = 0;
// data.map((u) => {
//     marks.push(u.marks);
// });
// n = marks.length;

// for (i in marks) {
//   mark = marks[i];
//   if (mark > h) {
//     h = mark;
//   }
//   if (mark < l) {
//     l = mark;
//   }
//   s += mark;
// }

// a = s / n;

// content = `Hightest: ${h}\nLowest: ${l}\nAverage: ${a}\n`;

// fs.writeFileSync("report.txt", content);

// ----------------------------------------


// Q3

// const fs = require('fs');
// let data = fs.readFileSync('events.txt', { encoding: 'utf8', flag: 'r' });

// data = (data.split('\n'))

// dic = {}

// for(i in data){
//     if(!(data[i] in dic)){
//         dic[data[i]] = 0
//     }
//     dic[data[i]] += 1
// }

// console.log(dic)

// fs.writeFileSync("analytics.txt", JSON.stringify(dic));


// ---------------------------
// Q4


// const fs = require('fs');
// let data = fs.readFileSync('message.txt', { encoding: 'utf8', flag: 'r' });

// newData = data.toUpperCase()

// fs.writeFileSync("uppercase.txt", newData);

// let upper_data = fs.readFileSync('uppercase.txt', { encoding: 'utf8', flag: 'r' });

// res = upper_data.split(' ').length

// fs.writeFileSync("summary.txt", `Total words: ${res}`);






// --------------------
// Q5

// const fs = require('fs');
// data = fs.readFileSync('student.json', { encoding: 'utf8', flag: 'r' });
// students = JSON.parse(data)


// data = fs.readFileSync('mark.json', { encoding: 'utf8', flag: 'r' });
// marks = JSON.parse(data)


// dic = {}


// const findMarksFromId = (id) => {
//     res = -1
//     marks.map((m) => {
//         if(m.id === id){
//             res = m.marks
//         }
//     })
//     return res
// }

// students.map((s) => {
//     dic[s.name] = findMarksFromId(s.id)
// })

// content =  ``

// for(k in dic){
//     content += `${k} - ${dic[k]}\n`
// }


// fs.writeFileSync("new_report.txt", content);

