const express=require('express'); 
const app = express();
const port = 8000;

const db = require('./config/mongoose');

const passport = require('passport');
//use of JWT token
const passportJWT=require('./config/passport-jwt-strategy');

app.use(express.urlencoded({extended:true}));

app.use(passport.initialize());
//use express router
app.use('/',require('./routes/index'));

//server running on port 8000
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});