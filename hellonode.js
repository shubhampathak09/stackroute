var http=require("http");
http.createserver(function(request,response){
response.write("hello guys");
response.end();
})listen(8080);
