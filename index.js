const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config(); // Cargar variables de entorno

const app = express();
app.use(cors());
app.use(express.json());

// Conectar a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Conectado"))
  .catch(err => console.error("❌ Error al conectar MongoDB:", err));

app.get("/", (req, res) => res.send("API REST con Node.js y MongoDB 🚀"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Servidor en http://localhost:${PORT}`));


const productosRoutes = require("./routes/productos");
app.use("/api/productos", productosRoutes);