import { PrismaClient } from "@prisma/client";

import express, { Router } from "express";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = Router();

router.post("/courses", async (req, res) => {
  const { name, description = null, duration } = req.body;

  if (!name || !duration) {
    return res.status(422).json({
      message: "Missing parameters, must be provided name and duration.",
    });
  }

  const createdCourse = await prisma.courses.create({
    data: {
      name,
      description,
      duration,
    },
  });

  return res.status(201).json(createdCourse);
});

app.use(router);
app.listen(3000, () => console.log("Server started on port 3000"));
