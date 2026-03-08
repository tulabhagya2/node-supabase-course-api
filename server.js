import express from "express";
import cors from "cors";
import logger from "./middlewares/logger.js";
import coursesRoutes from "./routes/courses.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", coursesRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is listening on the port ${PORT}`)
})