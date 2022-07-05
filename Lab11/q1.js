// 1. Create a simple Node script that converts 'www.miu.edu' domain name to the equivalent IP address. (Search and learn 'dns' module, resolve4) - For this exercise, you need to look up Node.js API by yourself

const dns = require('dns')

let options = {
  family: 4,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

dns.lookup('www.miu.edu', options, function (err, address, family) {
  console.log('address: %j family: IPv%s', address, family)
});

options.family = 6
dns.lookup('www.miu.edu', options, function (err, address, family) {
  console.log('address: %j family: IPv%s', address, family)
});