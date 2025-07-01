import express from "express";
const router = express.Router();

 //User Registration
 router.post("/register", async (req, res,next) => {
    try {
        
        res.json({
            status:"success",
            message:"User registered successfully"
        })
    } catch (error) {
        next(error);
    }
 })

export default router;