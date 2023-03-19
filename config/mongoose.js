const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ToDo_List_DB')

const db= mongoose.connection;

db.on('error',console.error.bind(console,'Error occured while connecting to DB'));

db.once('open',function()
{
    console.log('Successfully Connected to the DB')
})

module.exports= db;