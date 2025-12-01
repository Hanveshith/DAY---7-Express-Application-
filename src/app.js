const express = require("express");
const path = require("path");
const app = express();


require("dotenv").config();
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
})

// Routes
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

// //Service Document
// app.get("/srv", async (req, res) => {
//   const URL = process.env.BASE_URL + "?$format=json";
//   try {
//     const response = await fetch(URL, {
//       headers: {
//         Authorization: `Basic ${authToken}`,
//       },
//     });

//     const data = await response.json();
//     res.send(data);
//   } catch (e) {
//     console.log("Errors:", e);
//     res.status(500).send("Failed");
//   }
// });


// //metadata
// app.get("/metadata", async (req, res) => {
//     const URL = process.env.BASE_URL + "/$metadata";
//     try {
//         const response = await fetch(URL, {
//             headers : {
//                 Authorization: `Basic ${authToken}`
//             }
//         })

//         const data = await response.text();
//         res.set("Content-Type", "application/xml");
//         res.send(data);
//     }catch(e){
//         console.log("Errors:", e);
//     res.status(500).send("Failed");
//     }
// })




// //StudentEnrolledCourses
// app.get('/enrolled/:id', async (req, res) => {
//     const {id} = req.params;
//     const URL = process.env.BASE_URL + `/Z301605_STUDENTSet(${id})/ToCourse?$format=json`;
//     try{
//         const response = await fetch(URL, {
//             headers : {
//                 Authorization: `basic ${authToken}`
//             }
//         });
//         const data = await response.json();
//         res.send(data);
//     }catch(e) {
//         console.log(e);
//         res.status(500).send("Failed");
//     }
// })

module.exports = app;
