import { Router } from "express";
const router = Router();

import MocksController from "../controllers/mocks.controller.js"
import userModel from "../dao/models/User.js";
import petModel from "../dao/models/Pet.js";

// Ruta para mockingpets 
router.get('/mockingpets', MocksController.getMockingPets);

// Ruta para mockingusers (se usará para generar usuarios)
router.get('/mockingusers', MocksController.getMockingUsers);

// Generar y guardar datos en la base de datos
router.post('/generateData', MocksController.generateData);

router.get('/users', async (req, res) => {
    const users = await userModel.find();
    res.send({ status: 'success', payload: users });
});

router.get('/pets', async (req, res) => {
    const pets = await petModel.find();
    res.send({ status: 'success', payload: pets });
});

export default router;