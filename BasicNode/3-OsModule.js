// by this making sure that js and backend application talking to operating system module
const os = require("os");


//userInfo returns information about currently effective user
const user = os.userInfo();
console.log(user);



// to know the name of operationg system 
const nameOfOS = os.type();
console.log(nameOfOS);

// to check no. of cpus i have
const numOfCpus = os.cpus();
console.log(numOfCpus);

// to check totalMemory
const totalMemory = os.totalmem();
console.log(totalMemory);