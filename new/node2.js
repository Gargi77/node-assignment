
var http=require('http');

var server=http.createServer((req,res)=>{

var student={
    name:"Gargi",
    age:"21"
};
res.end(JSON.stringify(student));

});
server.listen(3000);
console.log("working!!!");
