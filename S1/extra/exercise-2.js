const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false},
 {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, 
{name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];

for (veganFood of foodSchedule){
    if(veganFood.isVegan === false){
        veganFood.name = fruits.pop()
        veganFood.isVegan = true
    }
}
console.log(foodSchedule)