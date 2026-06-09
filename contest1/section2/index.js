// Q1
// const ip = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]

// ans = {"A": 0, "B": 0}

// ip.map((u) => {
//     if (u.user === "A"){
//         ans.A += u.amount
//     }
//     if (u.user === "B"){
//         ans.B += u.amount
//     }
// })

// console.log(ans)

// ---------------------------------------

// Q2

// ip = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]

// temp = {}
// ip.map((u) => {
//     temp[u.id] = u.name
// })

// console.log(temp)

// ---------------------------------------

// Q3

// ip = { a: 0, b: null, c: "hello", d: undefined, e: 5 }
// op = {}

// for(let key in ip){
//     val = ip[key]
//     if(val){
//         op[key] = val
//     }
// }
// console.log(op)

// ---------------------------------------

// Q4

// roles={ admin:["read","write"], user:["read"], staff: ["write"]}
// checkRole="user",
// action="write"

// if(roles[checkRole][0] === action){
//     console.log( true)
// }else{
//     console.log( false)
// }

// ---------------------------------------

// Q5
// ip = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]

// op = {}
// ip.map((ele) => {

//     if (op[ele.category]){
//         op[ele.category] += ele.price
//     }
//     else{
//         op[ele.category] = ele.price
//     }

// })

// console.log(op)

// ---------------------------------------

// Q6

// ip = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// op = []

// const checkInOP = (id) => {
//     if(id in op){
//         return true
//     }
//     return false
// }

// ip.map((u) => {
//     if(!checkInOP(u.id)){
//         op.push(u)
//     }
// })

// console.log(op)

// ---------------------------------------

// Q7

// ip = {
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" },
// };

// op = { hello: {}, bye: {} };
// for (let lang in ip) {
//   h = ip[lang].hello;
//   b = ip[lang].bye;

//   if (h) {
//     op.hello[lang] = h;
//   }

//   if (b) {
//     op.bye[lang] = b;
//   }
// }

// console.log(op);




// ---------------------------------------

// Q8

// ip = [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]

// op = {}

// ip.map((ele) => {
//     if(!(ele.category in op)){
//         op[ele.category] = []
//     }
//     op[ele.category].push(ele.id)
// })

// console.log(op)



// ---------------------------------------

// Q9

// ip1 = { a: { x: 1, y: 2 } }
// ip2 =  { a: { x: 1, y: 2 } }

// flag = 0
// for(key in ip1){
//     ob1 = ip1.key
//     ob2 = ip2.key

//     if (!ob1 || !ob2){
//         console.log(false)
//         flag = 1
//         break
//     }

//     for(obkey in ob1){
//         if(ob1[obkey] != ob2[obkey]){
//             console.log(false)
//             flag = 1
//             break   
//         }
//     }

    
    
// }

// flag ===  0 ? console.log(true) : console.log(false)




// ---------------------------------------

// Q10
// ip = { a: [1, [2, [3]]], b: [4, [5]] }

// op = {}

// for(k in ip){
//     op[k] = ip[k].flat(100000)
// }

// console.log(op)


// ---------------------------------------

// Q11

// ip = { fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }
// arr = []

// for(k in ip){
//     arr.push(...ip[k])
// }

// dic = {}
// for(ele in arr){
//     if(!(arr[ele] in dic)){
//         dic[arr[ele]] = 0
//     }
//     dic[arr[ele]] += 1
// }

// fruit = ""
// max = 0
// for(k in dic){
//     if(dic[k] > max){
//         max = dic[k]
//         fruit = k
//     }
// }

// console.log(fruit)

// --------------------------------------

// Q12

// ip = { a: [1,2,3], b: [2,3,4], c: [3,4,5] }

// op = []
// c = 0

// for(k in ip){
//     if(c == 0){
//         op = ip[k]
//     }
    
    
//     if(c >= 1){

//         op = op.filter(value => ip[k].includes(value));
//     }
    
//     c += 1
// }
// console.log(op)



// -----------------

// Q13

ip1 = { a: { x: 1, y: 2 } }
ip2 = { a: { y: 3, z: 4 } }



// { a: { x: 1, y: 3, z: 4 } }




