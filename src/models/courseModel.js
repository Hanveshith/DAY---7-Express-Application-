require("dotenv").config();
const authToken = require('../auth/auth');
const fetchCourses = async () => {
    const URL = process.env.BASE_URL + "/Z301605_COURSESet?$format=json";
    try{
        const response = await fetch(URL, {
            headers: {
                Authorization: `basic ${authToken}`
            }
        })
        const data = await response.json();
        return data
    }catch(e) {
        console.log(e);
        res.status(500).send("Failed");
    }
};

module.exports = {
    fetchCourses
}