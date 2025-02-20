import express from "express";
import prisma from "db/client";
import { faker } from "@faker-js/faker";
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from backend" });
});
app.post('/',async(req,res)=>{
  
  const user = await prisma.user.create({
    data: {
      email: faker.internet.email(),
      name: faker.person.fullName(),
    },
  });
  res.status(200).json({message:"User created",user})
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
