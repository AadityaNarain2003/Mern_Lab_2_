import express from "express";
import router from "./routes/notesRouter.js";

const app= express();

app.use("/api/notes",router);

app.listen(5001,() => {
    console.log("Server started at Port 5001");
});