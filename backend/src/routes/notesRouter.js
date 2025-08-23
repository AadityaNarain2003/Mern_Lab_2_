import express from "express";
import { createNotes, updateNotes, deleteNotes, getAllNotes } from "../controller/notesController.js";

const router = express.Router();

router.get("/",getAllNotes);

router.post("/",(req,res) => {
    
});

router.put("/:id",(req,res) => {
    
});

router.delete("/:id",(req,res) => {
    
});

export default router;