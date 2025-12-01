const courseModel = require("../models/courseModel");

const getCourses = async (req, res) => {
    try {
        const data = await courseModel.fetchCourses();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch courses" });
    }
};

module.exports = {
    getCourses
}