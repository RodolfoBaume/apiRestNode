const express = require("express");
const Producto = require("../models/producto");
const router = express.Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

// Crear un nuevo producto
router.post("/", async (req, res) => {
  const nuevoProducto = new Producto(req.body);
  await nuevoProducto.save();
  res.status(201).json(nuevoProducto);
});

// Actualizar un producto
router.put("/:id", async (req, res) => {
  const producto = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(producto);
});

// Eliminar un producto
router.delete("/:id", async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({ mensaje: "Producto eliminado" });
});

module.exports = router;