//console.log(global);


// This run once a 3 sec
setTimeout(() => {
    console.log('in time out')
    clearInterval(int);
}, 3000);

// this runs every 1 sec

const int = setInterval(() => {
    console.log('+ TIME');
}, 1000);