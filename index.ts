import express , { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration the .env file
dotenv.config();

// Create server
const port: string | number = process.env.PORT || 5000
const app: Express = express();

// Define the first route
app.get("/", (req: Request, res: Response) => {
    res.status(200).send('Hello world, I learning node express full backend')
})

app.get("/hello", (req: Request, res: Response) => {
    res.status(200).send('Hello world, I learning the route FULLSTACK')
})

// Execute   App and listen request port
app.listen(port, () => console.log(`EXPRESS SERVER: Running the at http://localhost:${port}`))

