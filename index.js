const express = require('express');
const port = 8080;
const db = require('./config/mongoose')
const tasks = require('./models/tasks')
const app= express();


app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views/assets'))

app.get('/',function(req,res)
{
    tasks.find({}).then(function(tasklist)
    {
        return res.render('home',
        {
            title:'Task List',
            taskList:tasklist
        })
    }).catch(function(error)
    {
        console.log(`Error in displaying the tasks : ${error}`);
    })
})

//To create a task
app.post('/create-task',function(req,res)
{
    tasks.create(req.body).then(function()
    {
        console.log("Task created succesfully");
        res.redirect('back');
    }).catch(function(error)
    {
        console.log(`Error in creating the task : ${error}`)
    })

})

// To delete a task
app.post('/delete-task',function(req,res)
{
    let ids=req.body.taskid;

    tasks.deleteMany({_id:{$in:ids}}).then(function()
    {
        res.redirect('back');
    }).catch(function(error)
    {
        console.log('Error in deleting the clicked contact',error);
    })

})

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`Server did not start as the following error occured ${error}`);
        return;
    }

    console.log(`Server is up on the port ${port}`)
})