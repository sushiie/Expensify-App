const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data', 'other');
        // reject('something went wrong')
    }, 5000);
});

console.log('Before');

promise.then((data) => {
    console.log('1',data);
    return 'some data'
}).then((res) => {
    console.log('does this run?', res)
}).catch((error) => {
    console.log('error: ', error);
});

console.log('After');