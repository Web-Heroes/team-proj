/*
COMP249-WebHeroes
Manya Gupta - 301176500
Prince Duru - 301167756
Tatsat Tendulkar - 301166880
Shaqayeq Salimy - 301114141
Mark Vinarao - 301161669
*/


const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(__dirname + '/angular-build'));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, 'angular-build', 'index.html'))
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);