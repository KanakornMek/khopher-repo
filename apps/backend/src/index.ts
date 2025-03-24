import express from "express";
import cors from "cors";
import { z } from "zod";
import { userSchema } from "api-types";

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/welcome", (req, res) => {
    const schema = z.object({
        name: z.string(),
    });
    const { name } = schema.parse(req.body);
    res.send({ message: `Welcome, ${name}!` });
})

app.post("/api/user", (req, res) => {

    const user = schema.parse(req.body);
    res.send(user);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});