import { faker } from "@faker-js/faker";

export async function userSeed() {
  let input = [];
  try {
    for (let i = 0; i < 200; i++) {
      const firstName = faker.person.fullName();
      const name = faker.internet.userName({ firstName });

      const email = faker.internet.email({ firstName: name });
      const password = faker.internet.password(
        "$2a$12$l9BppooJFvIg1vlBQExKNOu7f"
      );
      const createdAt = faker.date.past({ years: 2 });

      let user = {
        email,
        name,
        password,
        roles: ["user"],
        createdAt,
        updatedAt: createdAt,
        __v: 4 + i++,
      };

      input.push({ insertOne: { document: user } });
    }
    return input;
  } catch (err: any) {
    console.log(err.stack);
  }
}
