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
app.post('/share', function (req, res) {
   var file_name;
   while(true){
	file_name = generateRandomFileName();
	if(!(file_name in path_dict))
	{
	   break;
	}
   }
   file_name = "/"+file_name;
   path_dict[file_name]=req.body;
   console.log(file_name);
   console.log(path_dict[file_name]);

   let json_post = {
	"success":true,
	"link":`http://localhost:3000${file_name}`
   }
   res.send(json_post)
   res.send(`success:True,link:http://localhost:3000${file_name}`); 


});


// Output: Print JSON or return ERROR
app.get('*',function(req, res){
   console.log(req.path);
   if (req.path in path_dict){
    res.send(`${JSON.stringify(path_dict[req.path])}`);
    delete path_dict[req.path];
 } else{
    let json_post = {
	"success":false,
	"error":404,
	"message":"Not Found"
	}
    res.send(json_post);
 }
});

function generateRandomFileName() {
  var filename = "";
  var char_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 6; i++)
    filename += char_set.charAt(Math.floor(Math.random() * char_set.length));
  return filename;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
