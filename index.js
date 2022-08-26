const express = require('express');
const app = express();
const port = 8000;


app.use('/',require('./routes'));


app.set('view engine','ejs');
app.set('views','./views');

// app listening
app.listen(port,function(err){
    if(err){
        console.log(`There is an error starting server ${err}`);
    }

    console.log(`Server is running on port ${port}`);
});