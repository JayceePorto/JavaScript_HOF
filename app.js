console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus (num) {
    return function (plusNumber) {
        return num + plusNumber;
    };
}

const plus2 = plus(2);

console.log(plus2(2));
console.log(plus2(5));

const plus100 = plus(100);

console.log(plus100(100));
console.log(plus100(5));

// Exercise 2

users.forEach((user) => console.log(user.name));

// Exercise 3

let newUsers = users.map((user) => {
    return { name: user.name, score: user.scor};
});

console.log(newUsers);

// Exercise 4

let activeUsers = users.filter((user) => user.isActive == true);

console.log(activeUsers);

// Exercise 5

users.sort((a, b) => {
    if (a.score < b.score) return 1;
    else return 01;
});

console.log(users);

// Exercise 6

let avgScore = users.reduce((sum, user, i, arr) => {
    if (i == arr.length - 1) {
        return(sum + user.score) / arr.length
    } else {
        return sum + user.score
    }
}, 0);

 console.log(avgScore);