import MockingService from "../services/mocking.js";

class MocksController {
    
    async getMockingPets(req, res) {
        res.json({ message: 'Mocking pets endpoint funcionando' });
    }

    async getMockingUsers(req, res) {
        try {
            const users = await MockingService.generateMockingUser(50); 
            res.send({ status: "success", payload: users });
        } catch (error) {
            console.error('Error al generar usuarios:', error);
            res.status(500).send({ status: "error", message: "Error al generar usuarios" });
        }
    }
}

export default new MocksController();
