import { PrismaClient } from "@prisma/client";

import express, { Router } from "express";

// prisma setup

const prisma = new PrismaClient();

// server config

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = Router();

// courses

router.post("/courses", async (req, res) => {
  const { name, description = null, duration, teacherId } = req.body;

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
      fk_id_teacher: teacherId,
    },
  });

  return res.status(201).json(createdCourse);
});

router.get("/courses", async (req, res) => {
  const { offset = 0, limit = 10 } = req.query;

  const paginate = {
    skip: Number(offset),
    take: Number(limit),
  };

  const searchMany = limit ? paginate : undefined;

  const courses = await prisma.courses.findMany(searchMany);

  res.setHeader("X-Total-Count", courses.length);
  res.setHeader("Access-Control-Expose-Headers", "X-Total-Count");

  return res.status(200).json(courses);
});

router.patch("/courses/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, duration } = req.body;

  const updatedCourse = await prisma.courses.update({
    where: { id },
    data: {
      name,
      description,
      duration,
    },
  });

  return res.status(200).json(updatedCourse);
});

// teachers

router.post("/teachers", async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(422).json({
      message: "Missing parameters, must be provided name.",
    });
  }

  const createdTeacher = await prisma.teachers.create({
    data: {
      name,
    },
  });

  return res.status(201).json(createdTeacher);
});

// server setup

app.use(router);
app.listen(3000, () => console.log("Server started on port 3000"));
