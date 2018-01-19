var url = require('url');

var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

//Parse the address:
var q = url.parse(adr, true);

//var q = url.parse('http://localhost:8080/default.htm?year=2017&month=february', true);
/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/

var qdata = q.query;	//returns an object: { year: 2017, month: 'february' }
console.log(qdata.year);
console.log(qdata.month);

