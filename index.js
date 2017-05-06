var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.use(express.static('public'));
app.use('/components', express.static('bower_components'));
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', function(req, res) {
  res.render('Home', {
      layout: 'baitap1',
      cssfile: 'Home',
      activenavbar0: 'active',
      activeleftmenu0: 'active',
  });
})

app.get('/Album', function(req, res) {

        res.render('Album', {
            layout: 'baitap1',
            cssfile: 'Album',
            activenavbar1: 'active',
            activeleftmenu1: 'active'
        });

});

app.get('/Album/List1', function(req, res) {

        res.render('List1', {
            layout: 'baitap1',
            cssfile: 'Album',
            activenavbar1: 'active',
            activeleftmenu1: 'active'
        });

});

app.get('/Album/List2', function(req, res) {

        res.render('List2', {
            layout: 'baitap1',
            cssfile: 'Album',
            activenavbar1: 'active',
            activeleftmenu1: 'active'
        });

});

app.get('/About', function(req, res) {
        res.render('About', {
            layout: 'baitap1',
            cssfile: 'About',
            activenavbar2: 'active',
            activeleftmenu2: 'active'
        });

});

app.get('/Blog', function(req, res) {

        res.render('Blog', {
            layout: 'baitap1',
            cssfile: 'Blog',
            activenavbar3: 'active',
            activeleftmenu3: 'active'
        });

});

app.get('/Blog/Topic1', function(req, res) {

        res.render('Topic1', {
            layout: 'baitap1',
            cssfile: 'Blog',
            activenavbar3: 'active',
            activeleftmenu3: 'active'
        });

});

app.get('/Blog/Topic2', function(req, res) {

        res.render('Topic2', {
            layout: 'baitap1',
            cssfile: 'Blog',
            activenavbar3: 'active',
            activeleftmenu3: 'active'});

});

app.get('/DangKy', function(req, res) {
    res.render('DangKy');
});

var port = 3000
app.listen(port, function() {
  console.log(`Dang nghe tren port ${port}`);
});
