

switch (num) {
    case num < 49:
        console.log('NO');
        break;
    case num > 100:
        console.log('SO MANY');
        break;
    case num > 80:
        console.log('AGAIN SO MUCH');
        break;
    case 50: 
        console.log('RIGHt');
        break;
    default: 
        console.log('Something gone wrong');
        break;
}

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 9; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i)
}

var x = 5;
console.log(x++);

let y=1;
let x=y=2;
console.log(+"Infinity");

let a = [1, 2, 3];
let b = [1, 2, 3]

if ( a == b ) {
    console.log("nice")
} else {
    console.log("bad")
}