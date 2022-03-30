//Make an array of strings of the names saying whether or not they can go to The Matrix (major)
// use array Map 

//Résultat attendu: 
// ["Angelina Jolie can go to The Matrix", 
  // "Eric Jones is under age!!", 
  // "Paris Hilton is under age!!", 
  // "Kayne West is under age!!", 
  // "Bob Ziroll can go to The Matrix"]

  let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]; 

// function goToTheMatrix(arr){
//     return people.map(person => {
//         if (person.age >= 18) {
//             return `${person.name} can go to The Matrix`
//         }
//         return `${person.name} is under age!!`
//     })
// }

// console.log(goToTheMatrix());