import express from "express";

const app= express();

app.get("/api/notes", (req, res) => {
    res.send("You got some notes");
});

app.listen(5001,() => {
    console.log("Server started at Port 5001");
});