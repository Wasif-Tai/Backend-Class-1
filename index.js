import express from "express";
import userRoutes from "./routes/test.js";

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());

// Routes
app.use("/test", )
// Home route
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Sabse pehle npm init karenge take backend ke liye package.json file create ho jaye
// phir install kerna npm i express take express framework install ho jaye
// import express from "express" ke zariye express framework ko import karenge
// express node js ka framework hai jisme hum easily backend create kar sakte hai
// phir hum PORT ke zariye server ko run karenge
// app.get ke zariye home route create karenge aur res.send ke zariye message print karenge browser me
// app.listen ke zariye server ko run karenge aur console.log ke zariye message print karenge browser me
// const app = express() ke zariye express framework ko app variable me store karenge
// const PORT = 3000 ke zariye server ko run karne ke liye port number define karenge
// app.use(express.json()) ke zariye express framework me json data ko parse karenge

// Type of requesting:

// 4 tareeke ki request hoti hai: Post, Get,Put/Patch, Delete
// Post me Data add kerne ke liye use hota hai
// Get me Data get kerne ke liye use hota hai
// Put/Patch me Data update kerne ke liye use hota hai
// Delete me Data delete kerne ke liye use hota hai
