const request = require("supertest");
const app = require("../app");
const bcrypt = require("bcrypt");

// ednpoint Register
const userTest = {
  name: "user test",
  email: "user@test.com",
  username: "usertest",
  password: bcrypt.hash("password", 10),
  role: "USER",
};

var token = "";

const truncate = require("../handlers/truncate");
truncate.user();

describe("endpoint /auth/register", () => {
  // register success
  test("register success", async () => {
    const res = await request(app).post("/auth/register").send(userTest);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("message");
    expect(res.body).toHaveProperty("data");
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe("create new user successful");
    expect(res.body.data).toStrictEqual({
      name: userTest.name,
      email: userTest.email,
      username: userTest.username,
      password: userTest.password,
      role: userTest.role,
      is_verified: 0,
    });
  });
});
