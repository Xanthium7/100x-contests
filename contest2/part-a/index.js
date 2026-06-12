// const players = [
//   { name: "Aman", score: 320 },
//   { name: "Riya", score: 410 },
//   { name: "Kabir", score: 410 },
//   { name: "Arjun", score: 250 },
//   { name: "Sneha", score: 320 }
// ];



// const temp = players.sort((a, b) => {
//     return b.score < a.score ? -1 : b.score > a.score ? 1: 0
// })

// let c = 0
// let same = false
// const res = temp.map((player) => {
//     c += 1
//     return {...player, rank: c}
// })

// const ans = res.map((player, i) => {
//     if(i >= 1){
//         if(res[i].score === res[i-1].score){
//            player.rank = res[i-1].rank
//            return player
//         }else{
//             return player
//         }
//     }else{
//         return player
//     }

// })
// console.log(ans)



// ----------------------------------------------------------


// const branchStudents = {
//   CSE: ["Aman", "Riya"],
//   ECE: ["Kabir"],
//   ME: ["Arjun", "Sneha"]
// };

// ans = {}
// for(key in branchStudents){
//     arr = (branchStudents[key])
//     for(i=0; i<arr.length; i++){
//         ans[arr[i]] = key
//     }
// }

// console.log(ans)


// ----------------------------------------------------------------

// const cart = [
//   { name: "Laptop", price: 80000, qty: 1, category: "electronics" },
//   { name: "Mouse", price: 500, qty: 2, category: "electronics" },
//   { name: "Shoes", price: 3000, qty: 1, category: "fashion" }
// ];

// const coupons = {
//   electronics: 0.10,   // 10% off
//   fashion: 0.20        // 20% off
// };

// total = 0

// for(i = 0 ; i<cart.length; i++){
//     ele = cart[i]
//     price = ele.price * ele.qty

//     if(coupons[ele.category]){
//         price = price * (1-coupons[ele.category])
//     }

//     total += price

// }

// console.log(`Final amount: ${total}`)



// --------------------------------------------------------------

// const orders = [
//   "Laptop", "Mouse", "Laptop", "Keyboard",
//   "Laptop", "Mouse", "Keyboard", "Mouse", "Monitor"
// ];

// dic = {}

// for(i =0 ; i < orders.length; i++){
//     if(!(orders[i] in dic)){
//         dic[orders[i]] = 0
//     }
//     dic[orders[i]] += 1
// }

// max = 0
// max_ele = ""
// for(k in dic){
//     if(dic[k] > max){
//         max = dic[k]
//         max_ele = k
//     }
// }

// smax = 0
// smax_ele = ""
// for(k in dic){
//     if(dic[k] > smax && k !== max_ele){
//         smax = dic[k]
//         smax_ele = k
//     }
// }


// console.log({product: smax_ele, count:smax})



// ----------------------------------------------




// const colleges = [
//   {
//     name: "MITS",
//     departments: [
//       { name: "CSE", students: [{ name: "A", cgpa: 8.2 }, { name: "B", cgpa: 9.1 }] },
//       { name: "ECE", students: [{ name: "C", cgpa: 7.5 }] }
//     ]
//   },
//   {
//     name: "NIT",
//     departments: [
//       { name: "ME", students: [{ name: "D", cgpa: 8.8 }, { name: "E", cgpa: 6.9 }] }
//     ]
//   }
// ];


// ans = []
// colleges.forEach((college) => {
//     cname = college.name
//     college.departments.forEach((department) => {
//         dept = department.name
//         department.students.forEach((student) => {
//             sname = student.name
//             cgpa = student.cgpa
//             ans.push({name: sname, cgpa: cgpa, college: cname, dept: dept})
//         })
//     })
// })

// console.log(ans)