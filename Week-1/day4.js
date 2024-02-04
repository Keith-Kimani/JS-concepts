/**
 * @OBJECTS
 */

let person= {
    name : 'Nana',
    age : 27,
    school : 'Zindua School',
    personalities : ['neat', 'kind', 'humble'],
    stubborn : false,
    hobbies : {
        indoor : ['reading', 'cooking'],
        outdoor : ['swimming', 'hiking'],
    },
    sound : function () {
        return('I am a human being')
    }
}

console.log(person.school)
//let people = [
   // {
        //name : 'Jane',
        //age : 23,
        //city : 'Nairobi'
   // },
   /// {
        //name : 'Brian',
        //age : 39,
        //city : 'Naivasha'
    //},
   // {
        //name : 'Joshua',
        //age : 27,
        //city : 'Naivasha'
    //}
//]

//function printPeople() {
    //for (let i = 0; i < people.length; i++){
    //    console.log(people[i])
    //}
//}

//function groupBy(arr, property) {
   //let grouped = {};
    //for (let i = 0; i < arr.length; i++){
       // let person = arr[i]
       // let key = person[property]
         
       // if(!grouped[key]) {
        //    grouped[key] = [person]
       // }  else {
         //   grouped[key].push(person)
       // }    
    //}
    //return grouped;
//}


//console.log(groupBy(people, 'age'))