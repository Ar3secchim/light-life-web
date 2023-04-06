import prisma from "../../database/index.js";

export const findAll = async (req, res)=>{
  const user = await prisma.user.findMany();
  res.status(200).end(JSON.stringify(user));
}