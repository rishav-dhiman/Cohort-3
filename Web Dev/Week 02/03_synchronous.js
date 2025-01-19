function sum(n){
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}

const ans = sum(100)
console.log(ans);
const ans2 = sum(1000)
console.log(ans2);
const ans3 = sum(10000)
console.log(ans3);