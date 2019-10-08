const express= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const methodOverride= require('method-override');
const session=require('express-session');
//Initializations
const app= express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);// Port 3000 or available one in the current pc
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs',exphbs({    //all of this is to tell the module "expresss-handlebars" how to use the views
    defaultLayout: 'main',    //is the main "html view" is like a main template to the app
    layoutsDir: path.join(app.get('views'), 'layouts'),    //here we tell to the module where is the layout carpet
    partialsDir: path.join(app.get('views'), 'partials'),    //where are the rest of the "templates"...
    extname: '.hbs'    // which extension will have the files to the module for read
    
}));
app.set('view engine', '.hbs')

//Middlewares: functions that they'll be executed before they get to the server 
//or before to give them to the routes
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))    //is to know between which inputs the forms are gona give us some methods
app.use(session({    //this is necessary to aunthenticated the user
    secret:'mysecret',
    resave:true,
    saveUninitialized:true
}));

//Global variables

//Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server initialization
app.listen(app.get('port'),() =>{
    console.log("server listening on port: ",app.get('port'));
});