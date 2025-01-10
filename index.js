//Create the port number
const PORT = 3333;
let express = require("express");
let path = require("path");
let app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.listen(PORT, () => console.log("App is listening on port:" + PORT));
let knex = require("knex")({
    client: "pg",
    connection: {
        host: "localhost",
        server: "YSA218th",
        user: "postgres",
        password: "",
        database: "postgres",
        port: 5432
    },
    useNullAsDefault: true
});

//send the sign in page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});