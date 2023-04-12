import prisma from "../../database/index.js";

export const findAll = async (req, res)=>{
  const user = await prisma.user.findMany();
  res.status(200).end(JSON.stringify(user));
}

export const create = async (req, res)=>{
  const newUser = await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
  });
  res.status(201).end(JSON.stringify(newUser));
}