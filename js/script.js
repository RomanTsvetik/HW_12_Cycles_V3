
let num = prompt('Введите число:');

let minDiv;

if (num < 1) {
    console.log(NaN);
}
        
else {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            minDiv = i;
            console.log(minDiv);
            break;
        }
    }
}
