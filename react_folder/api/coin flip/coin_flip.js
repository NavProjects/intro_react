function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount == 5 ){
                resolve('It landed on heads 5 times')
            }else if (attempts > 100){
                reject("coin was flipped more than 100 times")
            }
        }
        });
}
fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));

