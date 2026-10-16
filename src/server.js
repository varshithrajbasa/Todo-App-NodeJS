require("dotenv").config();

const app = require("./expressApp");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
};

startServer();