const express = require('express');
const app = express();
const PORT = 5000;
const flash = require('connect-flash');
const session = require('express-session');

app.set('view engine','ejs');
app.use(session({
  resave:false,
  saveUninitialized: false,
  secret:'secret code'
}));
app.use(flash());

app.use((req, res, next) => {
  res.locals.flash = req.flash('flash');
  next();
});

app.get('/',(req,res)=>{
  res.render('index.ejs');
})

app.get('/flash',(req,res)=>{
  req.flash('flash','Snatched flash is here');
  res.render('flash.ejs');
})

app.listen(PORT, ()=>{
    console.log('server running');
})
