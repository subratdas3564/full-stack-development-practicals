const express = require("express");
const app = express();
const studentRoutes = require('./Routes/student');
const courseRoutes = require('./Routes/course');
const attendanceRoutes = require('./Routes/Attendance.js');

app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/attendance', attendanceRoutes);

app.get("/", (req, res) => {
    res.send("rollnumber: 123456, name: John Doe, email: johndoe@example.com, department: Computer Science, semester: 5");
});

app.listen(3000, () => { 
    console.log("Server running at http://localhost:3000");
});