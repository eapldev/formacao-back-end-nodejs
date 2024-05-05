const app = require("../../server");
const request = require("supertest");
const { user1, user2, listDatabase } = require("./mocks");

describe("Rota de cadastro de usuário", () => {
  test("Cadastro usuário 1", async () => {
    const res = await request(app).post("/users").send(user1);

    expect(res.body).toEqual(user1);
  });

  test("Cadastro usuário 2", async () => {
    const res = await request(app).post("/users").send(user2);

    expect(res.body).toEqual(user2);
  });
});

describe("Rota de listagem de usuários", () => {
  test("Testando listagem de usuários...", async () => {
    const res = await request(app).get("/users");

    expect(res.body).toEqual(listDatabase);
  });
});
