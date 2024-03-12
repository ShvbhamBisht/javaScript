/* # Primitive Data Types

7 types:

1. String
2. NUmber
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

*/

/* Reference Types or Non-Primitive Types

Arrays, Objects, Functions

*/

/* Memory

Stack(Primitive), Heap(Non-Pirmimtive)

*/

//Example of Stack Memory

let myYoutubename = "shubhambisht"

let anothername = myYoutubename
anothername = 'chaihi'

console.log(myYoutubename);
console.log(anothername);

//Example of Heap Memory

let userOne = {
      email: 'user@google.com',
      name: 'shubham'
}

let userTwo = {
      email: 'shubham',
      age: 19
}

userOne = userTwo

console.log(userOne);
console.log(userTwo);