import express from "express";
import supabase from "../supabaseClient.js";
import validateEnrollment from "../middlewares/validateEnrollment.js";
const router = express.Router();
router.get("/courses", async (req, res) => {
    try {
        const { data, error } = await supabase.from("courses").select("*").single();
        if (error) {
            throw error;
        }
        res.status(200).json({
            message: "all the courses getting successfully"
            , data
        })


    }

    catch (error) {
        res.status(500).json({
            message: error.message
        })
    }



})
router.post("/enroll", validateEnrollment, async (req, res) => {
    try {
        const { student_name, course_id } = req.body;
        const { data, error } = await supabase.from("enrollments").insert([{ student_name, course_id }]);
        if (error) {
            throw error;
        }
        res.status(201).json({
            message: "student enrolled successfully",
            data
        })


    }
    catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })

    }
});
router.get("/courses/:id/enrollments", async (req, res) => {
    try {
        const courseId = req.params.id;
        const { data, error } = await supabase.from("enrollments").select("*").eq("course_id", courseId);
        if (error) {
            throw error
        }
        res.status(200).json({
            message: "courses enrolled successfully",
            status: true, data

        })


    }
    catch (error) {
        res.status(500).json({
            message: error.message
        })

    }
})

export default router;