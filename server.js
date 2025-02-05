const express = require("express")
const studentRoutes= require('./src/student/routes')


const app = express()

const port = 5000

app.use(express.json());

app.get("/" , (req,res)=> {
    res.send("Hello World")
})

app.use('/api/v1/students' , studentRoutes); 

app.listen(port , ()=> console.log(`app is listening on port ${port}`)
)

