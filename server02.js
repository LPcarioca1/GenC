""//Require para importar biblioteca/Frameworks
var http = require('http'); //memoria portas :80 / 8080 => 403 / 433 / 4343

//CRIPTOGRAFADO

//processador
//sincroniza
http.createServer(
    //request = pergunta(requisicao)
    function(req,res){
    //response = resposta
    //res.end("Estou");
    console.log("To vivo");
    console.log(req.url)
    res.end(req.method)
}).listen(3000); //port 

//http://localhost:3000/
//5001 porta segura

//assincrono
//sincrono