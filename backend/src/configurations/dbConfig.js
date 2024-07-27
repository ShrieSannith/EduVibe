const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://user123:user123@cluster0.i0zyrqo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on("connected", () => {
    console.log("Connected");
}
)
mongoose.connection.on("error", (err) => {
    console.log(`${err}`);
}
)

module.exports = mongoose;


