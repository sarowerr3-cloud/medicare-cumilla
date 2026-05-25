// routes/services.js
import express from "express";
import upload from "../middlewares/multer.js";
import {
  createService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const serviceRouter = express.Router();

// Public routes
serviceRouter.get("/", getServices);
serviceRouter.get("/:id", getServiceById);

// Create service (multipart form; image field name is "image")
serviceRouter.post("/", upload.single("image"), createService);

// Update service (multipart form; image field name is "image")
serviceRouter.put("/:id", upload.single("image"), updateService);

// Delete
serviceRouter.delete("/:id", deleteService);

export default serviceRouter;
