function setTimeoutSync(timeout) {
    let startTime = new Date();
    while(1) {
        let currentTime = new Date()
        if (currentTime.getTime() - startTime.getTime() > timeout) {
            break;
        }
    }
}

setTimeoutSync(10000)

// console.log("hi there");

// function readFromTwoFiles(file1, file2) {
//     return[file1, file2]
// }