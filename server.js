const express = require(express);
require('dotenv').config();
const logger = require("./middlewares/logger");
const coursesRoutes = require("./routes/courses");
const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", coursesRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server is listening on the port ${PORT}`)
})