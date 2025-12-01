require("dotenv").config();
const authToken = require('../auth/auth');
const fetchStudents = async () => {
    const URL = process.env.BASE_URL + "/Z301605_STUDENTSet?$format=json";
    try {
         const response = await fetch(URL, {
            headers: {
                Authorization: `basic ${authToken}`
            }
         })
         const data = await response.json();
         return data
    }catch(e){
        console.log(e);
        res.status(500).send("Failed");
    }
};

module.exports = {
    fetchStudents
}