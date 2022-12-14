const express = require('express');
const loginRoute = require('./Routes/login.route');
const userRoute = require('./Routes/user.route');
const categoryRoute = require('./Routes/category.route');
const postRoute = require('./Routes/post.route');

// ...

const app = express();

app.use(express.json());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
