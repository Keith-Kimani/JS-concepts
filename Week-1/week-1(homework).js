let a = [
    { name: "Alice", age: 25, city: "New York"},
    { name: "Bob", age: 30, city: "Chicago"},
    { name: "Charlie", age: 35, city: "New York"},
    { name: "Dave", age: 40, city: "Chicago"},
]

function groupBy(array, property){
    let groupedItems = {}
    for(const item of array){
        let value = item[property]
        if(groupeditems[value]){
           groupeditems[value] = []
        }    
        groupeditems[value].push(item)

    }
    return groupedItems
} 
console.log(groupBy(a , "city"))