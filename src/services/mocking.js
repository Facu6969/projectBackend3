import { faker, Faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";
import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";


class MockingService {

    static async generateMockingPets(num) {
        console.log(`Generando ${num} pets mock`);
        const pets = []; //creamos pets
        for(let i = 0; i < num; i++) {
            pets.push({
                name: faker.animal.dog(),
                specie: faker.animal.type(),
                adopted: false
            });
        }
        return await petModel.insertMany(pets); // Inserta las mascotas en la base de datos
    }

    static async generateMockingUsers(num) {
        console.log(`Generando ${num} usuarios mock`);
        const users = []; //creamos usuarios
        for(let i = 0; i < num; i++) {
            users.push({
                first_name: faker.person.firstName(),
                last_name: faker.person.lastName(),
                email: faker.internet.email(),
                password: await createHash("coder123"),
                role: faker.helpers.arrayElement(["user", "admin"]),
                pets: []
            });
        }
        return await userModel.insertMany(users);
    }
}

export default MockingService;