const Express = require("express");

const app = Express();

app.listen(3000);

app.get("/" ,(req,res) => {
    return res.status(200).send("<h1>Welcome Food Server App</h1>");



});