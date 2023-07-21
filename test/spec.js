const { expect } = require("chai");
const { describe } = require("mocha");
const request = require("supertest")(require("./app"));
const { syncAndSeed } = require("./db");

//This is test suite
it("true is true", () => {
  expect(true).to.be.equal(true);
});

describe("GET /", () => {
  it("should receive 200", async () => {
    // request().get("/").expect(200);
    const response = await request.get("/");
    expect(response.status).to.equal(200);
  });
});

describe("run db using sync and seed", () => {
  //run the syncAndSeed before each block
  beforeEach(async () => {
    await syncAndSeed();
  });
});
