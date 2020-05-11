
var http = require('express'); 
var app = express();
    
app.listen(3000); 

//Rota
app.get("/", funtion(req, res){
    res.send("curioso quem ta lendo")
})

//Rota
