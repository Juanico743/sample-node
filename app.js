const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://Halow:Halow1234@nodetuts.xqmmacr.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURI)
// listen for request
.then((result) => app.listen(4000))
.catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');


//middle ware static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

//mongoose and mongo sandbox routes
/*app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: "about blog",
        body: 'more aboutmy blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        });
});

// see all blogs created
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

//find blog
app.get('/single-blog', (req, res) => {
    Blog.findById('667d41329a78f45f9cfce619')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})

app.use((req, res, next) => {
    console.log('New Request Made:');
    console.log('Host: ',req.hostname);
    console.log('Path: ', req.path);
    console.log('Method: ', req.method);
    next()
});
*/


app.get(['/', '/home'], (req, res) => {
    /*
    const blogs = [
        {title: 'DARK', snippet: 'When somethings dark, there is no light. Far from the city lights, it gets so dark at night that you can see many stars in the sky.'},
        {title: 'SHADOW', snippet: 'A shadow is a dark shape that is formed when an object blocks a source of light. On a sunny day, practically everything casts a shadow — including you. Shadow can also act as an action, like when you shadow, or follow, someone on the first day at a new job.'},
        {title: 'NIGHT', snippet: 'At the end of the day, when the sun goes down and the world gets dark, its night. If you work at night, you have to get used to sleeping in the middle of the day.'}
    ];
    res.render('index', {title: 'Home', blogs});
    */
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.use('/blogs', blogRoutes);

//redirect
app.get('about-us', (req, res) => {
    res.redirect('./about');
});

//404
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});