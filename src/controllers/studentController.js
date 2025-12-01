const studentModel = require("../models/studentModel");

const getStudents = async (req, res) => {
    try {
        const data = await studentModel.fetchStudents();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch students" });
    }
};

module.exports = {
    getStudents
}