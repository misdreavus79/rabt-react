var express = require('express'),
	app = express();
	

app.use(express.static(__dirname)); // + 'public', or whatever your root file would be
// app.set('view engine', 'html');
// app.engine('html', require('hbs').__express);
app.get('/', function(req, res){
	// res.render('index');
	res.send('index.html');
});
// app.get('/book', function(req, res){
// 	res.render('book');
// });
// app.get('/confirm', function(req, res){
// 	res.render('confirm');
// });

app.listen(8888);

console.log('server started');