import express from "express";

const userRoutes = express.Router();

userRoutes.get("/", (req, res) => {
  res.send({ data: { name: "Wasif" }, error: false, status: 200 });
});
userRoutes.post("/", (req, res) => {
  res.send("Post Request");
});
userRoutes.put("/", (req, res) => {
  res.send("PUT Request");
});
userRoutes.delete("/", (req, res) => {
  res.send("Delete Request");
});

export default userRoutes;
