import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "testdb",
// });

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Connected to MySQL");
// });

app.post("/submit", (req, res) => {
  const { name, email, number, university, level, faculty  } = req.body;

  const sql = "INSERT INTO users (name, email, phone_number, university, academic_level, faculty) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(sql, [name, email, number, university, level, faculty], (err, result) => {
    if (err) {
      res.status(500).json(err);
      return;
    }

    res.json({
      message: "Task added successfully",
    });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});