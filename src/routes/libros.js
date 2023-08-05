const express = require("express");
const router = express.Router();

const { getAllLibros, getLibroById, createLibro, updateLibro, deleteLibro} = require("../controllers/libroController");


// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los libros
router.get("/", requiredScopes("read:book"), getAllLibros);

// Ruta para obtener un libro por id
router.get("/:id", requiredScopes("read:book"), getLibroById);

// Ruta para crear un nuevo Libro
router.post("/", requiredScopes("write:book"), createLibro);

// Ruta para actualizar un Libro existente
router.put("/:id", requiredScopes("write:book"), updateLibro);

// Ruta para eliminar un Libro
router.delete("/:id", requiredScopes("write:book"), deleteLibro);

module.exports = router;
