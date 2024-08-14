import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("/", NotesController.getNotes);

router.post("/", NotesController.createNote);

router.patch("/:noteId", NotesController.updateNote);

router.get("/:noteId", NotesController.getNote);

router.delete("/:noteId", NotesController.deleteNote);

export default router;
