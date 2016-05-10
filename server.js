var express = require('express'),
	app = express();
	

app.use(express.static(__dirname)); // + 'public', or whatever your root file would be
app.set('view engine', 'ejs');
app.get('/', function(req, res){
	//res.render('pages/index');
	res.send('index.html');
});

app.listen(8080);

console.log('server started');