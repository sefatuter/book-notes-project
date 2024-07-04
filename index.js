import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book-notes",
  password: "sql1234",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Route to render the main page
app.get("/", async (req, res) => {
  const imgs = await getBookById();
  const desc = await getDescription();

  console.log(imgs);
  console.log(desc);
  res.render("index.ejs", { imgs: imgs, description: desc });
});

// API route to get book descriptions
app.get("/api/descriptions", async (req, res) => {
  try {
    const descriptions = await db.query("SELECT description FROM books");
    res.json(descriptions.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// API route to get book IDs
app.get("/api/books", async (req, res) => {
  try {
    const books = await db.query("SELECT book_name FROM books");
    res.json(books.rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Function to get book descriptions from the database
async function getDescription() {
  try {
    const result = await db.query("SELECT description FROM books");
    let description = [];

    console.log(result.rows);

    result.rows.forEach((id) => {
      description.push(id.description);
    });

    return description;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Function to get book IDs from the database
async function getBookById() {
  try {
    const result = await db.query("SELECT id_num FROM books");
    let bookImg = [];

    console.log(result.rows);

    result.rows.forEach((id) => {
      bookImg.push(id.id_num);
    });

    return bookImg;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// Example axios request
app.get("/api/external-data", async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/data");
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
