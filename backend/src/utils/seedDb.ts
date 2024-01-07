import { faker } from "@faker-js/faker";
import { createBulkUsers } from "../services/user.service";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
  try {
    // make a bunch of user data
    let input = [];

    for (let i = 0; i < 5000; i++) {
      const firstName = faker.person.firstName();
      const email = faker.internet.email({ firstName });

      let user = {
        email,
        firstName,
      };

      input.push({ insertOne: { document: user } });
    }
  } catch (err: any) {
    console.log(err.stack);
  }
}

seedDB();
