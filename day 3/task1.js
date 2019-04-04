const dns = require('dns')
const  {promisify} = require('util');
var domain='www.mum.edu';
dns.lookup(domain, function(err, result) {
  console.log('Ip: '+result)
})


const dnsLookup = promisify(dns.lookup);
dnsLookup(domain)
        .then (ip => console.log('Ip using by promise: '+ ip.address))
        .catch(error => console.log(error));

async function asyncLookup(){
    try{
        const ip = await dnsLookup(domain);
        console.log('Ip using by Async: '+ ip.address)

    }catch(error){
        console.log('Error:', error);
    }
}
asyncLookup();