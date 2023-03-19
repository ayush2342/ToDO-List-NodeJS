const express = require('express');
const port = 8080;
const app= express();
const db = require('./config/mongoose')


app.set('view engine','ejs');
app.set('views','./views')
app.use(express.static('./views/assets'))

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`Server did not start as the following error occured ${error}`);
        return;
    }

    console.log(`Server is up on the port ${port}`)
})