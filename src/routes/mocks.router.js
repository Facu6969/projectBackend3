import { Router } from "express";
const router = Router();

import MocksController from "../controllers/mocks.controller.js"

// Ruta para mockingpets 
router.get('/mockingpets', MocksController.getMockingPets);

// Ruta para mockingusers (se usará para generar usuarios)
router.get('/mockingusers', MocksController.getMockingUsers);

export default router;