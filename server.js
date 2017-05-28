const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

var app=express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');

// app.use(express.static(__dirname + '/final'));

app.use((req,res,next)=>{
  var now=new Date().toString();
  var log=`${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log + '\n',(error)=>{
    if(error)
    {
      console.log('Unable to append to the file');
    }
  });
  next();
});

// app.use((req,res,next)=>{
//   res.render('maintenance.hbs');
// });



hbs.registerHelper('getCurrYear',()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(msg)=>{
  return msg.toUpperCase();
});

app.get('/',(req,res)=>{
  // res.send('<h1>Hello Express!</h>');
  res.render('home.hbs',{
    pageTitle: 'Home Page',
    welcomeMsg: 'Welcome to my Website'
  });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page'
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'Unable to fulfill the request'
  });
});

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
