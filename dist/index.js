"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Configuration the .env file
dotenv_1.default.config();
// Create server
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
// Define the first route
app.get("/", (req, res) => {
    res.status(200).send('Hello world, I learning node express full backend');
});
app.get("/hello", (req, res) => {
    res.status(200).send('Hello world, I learning the route FULLSTACK');
});
// Execute   App and listen request port
app.listen(port, () => console.log(`EXPRESS SERVER: Running the at http://localhost:${port}`));
//# sourceMappingURL=index.js.map