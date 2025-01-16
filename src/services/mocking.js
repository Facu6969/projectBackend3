import { faker, Faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";


class MockingService {

    static async generateMockingUser(num) {
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
        return users;
    }
}

export default MockingService;