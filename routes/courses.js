import express from "express";
import supabase from "../supabaseClient.js";
import validateEnrollment from "../middlewares/validateEnrollment.js";
const router = express.Router();
router.get("/courses", async (req, res) => {
    try {
        const { data, error } = await supabase.from("courses").select("*").maybeSingle();
        if (error) {
            throw error;
        }
        res.status(200).json({
            message: "All the courses get successfully",
            data
        });
        catch (error) {

        });
    }
});
