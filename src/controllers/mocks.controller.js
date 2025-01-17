import MockingService from "../services/mocking.js";

class MocksController {

    async getMockingPets(req, res) {
        try {
            const pets = await MockingService.generateMockingPets(100); 
            res.send({ status: "success", payload: pets });
        } catch (error) {
            console.error('Error al generar Mascotas:', error);
            res.status(500).send({ status: "error", message: "Error al generar pets" });
        }
    }

    async getMockingUsers(req, res) {
        try {
            const users = await MockingService.generateMockingUsers(50); 
            res.send({ status: "success", payload: users });
        } catch (error) {
            console.error('Error al generar usuarios:', error);
            res.status(500).send({ status: "error", message: "Error al generar usuarios" });
        }
    }

    async generateData(req, res) {
        try {
            console.log('Cuerpo recibido en /generateData:', req.body);
            const { users = 10, pets = 10 } = req.body;
            console.log(`Generando ${users} usuarios y ${pets} mascotas`);
    
            const createdUsers = await MockingService.generateMockingUsers(users);
            const createdPets = await MockingService.generateMockingPets(pets);
    
            res.send({
                status: 'success',
                message: 'Datos generados e insertados correctamente',
                data: {
                    users: createdUsers,
                    pets: createdPets,
                },
            });
        } catch (error) {
            console.error('Error en /generateData:', error);
            res.status(500).send({ status: 'error', message: 'Error al generar datos' });
        }
    }
}

export default new MocksController();
