const time = new Date(Date.now());
console.log('the current time is ' + time.toDateString())

const d = new Date(1973, 0, 16, 19, 47, 38, 0);
console.log(d)

console.log(time.getFullYear());
console.log(time.toISOString());

const past = new Date(99, 3, 50);
console.log(past.toString())