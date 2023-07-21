const { expect } = require("chai");
const { describe } = require("mocha");
const request = require("supertest")(require("./app"));

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
