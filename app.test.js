
const request = require("supertest");
const app = require("./app");

describe("Node.js Demo Application", () => {
    test("Home page returns the welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("CI/CD application");
    });

    test("Health endpoint returns OK", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });
});
