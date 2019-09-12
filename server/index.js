const express = require('express')
const app = express()
const port = 3000

// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/', function (req, res) {
    
    res.send(`Received object. ${JSON.stringify(req.body)}`);

});

// post JSON data using /share
// create data structure which stores the file name with JSON body
var path_dict= {};
var pic_no=0
app.post('/share', function (req, res) {
   var file_name="/pgiPc".concat(String(pic_no));
   path_dict[file_name]=req.body;
   console.log(file_name);
   console.log(pic_no);
   res.send(`success:True,link:http://localhost:3000${file_name}`); 
   pic_no+=1;
});


// Output: Print JSON or return ERROR
app.get('/pgi*',function(req, res){
   if (req.path in path_dict){
    res.send(`${JSON.stringify(path_dict[req.path])}`);
    delete path_dict[req.path];
 } else{
    res.send("success:false,error:404,message:Not Found");
 }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
