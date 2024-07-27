const express = require('express'); 
const signuproute = require('./routes/signup');
const loginroute = require('./routes/login');
const userroute = require('./routes/user');
const formsroute = require('./routes/forms');
const TableRoute = require('./routes/table');
const courseRoutes = require('./routes/course');
// const Course = require("models/courseModel")
// const GetUserFromToken = require('./routes/getUserFromToken');

const bodyParser = require('body-parser');
const cors = require('cors');
const createAdminAccount = require("./scripts/admin")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// createAdminAccount();

app.use("/user", signuproute);
app.use("/auth", loginroute);
app.use("/api", userroute);
// app.use("/api", GetUserFromToken);
app.use("/input", formsroute);
app.use("/data", TableRoute);
app.use('/api/courses', courseRoutes);

app.listen(PORT, () => { 
    console.log(`listening to port: ${PORT}`);
})
    