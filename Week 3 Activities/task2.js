const fruit = ["Apple", "Banana", "Kiwi"];
console.log(fruit.join())

console.log(fruit.push("Blueberry"));
fruit.forEach(fruit => {
    console.log(fruit)
});

const numbers = [4, 20, 11, 87];
console.log(numbers.indexOf(11));


numbers.sort(function(a,b){return a-b});
numbers.forEach(number => {
    console.log(number)
});

numbers.reverse();
numbers.forEach(number => {
    console.log(number)
});
