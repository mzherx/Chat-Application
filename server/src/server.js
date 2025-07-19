import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';
import { connectDB } from './lib/db.js';
import chatRoutes from './routes/chat.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());  // 👈 Move this ABOVE the routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/chat', chatRoutes)

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
    connectDB();
});