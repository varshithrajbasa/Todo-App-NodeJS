
const mongoose = require("mongoose");

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null,
    };
}

const connectDB = async () => {
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not configured");
    }

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(process.env.MONGODB_URI)
            .then((connection) => connection)
            .catch((error) => {
                cached.promise = null;
                throw error;
            });
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        cached.conn = null;
        throw error;
    }
};

module.exports = connectDB;
