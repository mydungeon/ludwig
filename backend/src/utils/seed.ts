import { faker } from "@faker-js/faker";

export async function userSeed(seedCount: number) {
  let input = [];
  try {
    for (let i = 0; i < seedCount; i++) {
      const firstName = faker.person.fullName();
      const name = faker.internet.userName({ firstName });
      const email = faker.internet.email({ firstName: name });
      const password = faker.internet.password(
        "$2a$12$l9BppooJFvIg1vlBQExKNOu7f"
      );
      const fakeDate = Math.floor(
        Date.parse(faker.date.past({ years: 2 }).toDateString()) / 1000
      );

      const rating = faker.helpers.arrayElement([
        0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
      ]);

      let user = {
        email,
        name,
        password,
        roles: ["user"],
        createdAt: fakeDate,
        updatedAt: fakeDate,
        lastLoggedIn: fakeDate,
        rating,
        __v: i,
      };
      input.push({ insertOne: { document: user } });
    }
    return input;
  } catch (err: any) {
    console.log(err.stack);
  }
}
