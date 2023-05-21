const os = require("os");

// info about the current user
const user = os.userInfo();
console.log(user);

// System uptime in seconds
console.log(os.uptime());

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
    }
console.log(currentOS);