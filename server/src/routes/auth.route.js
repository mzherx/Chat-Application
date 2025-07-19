import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.post('/onboarding', protectRoute, onboard); // Uncomment when onboarding is implemented

// Check if the user is authenticated
router.get('/me', protectRoute, async (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
});

export default router