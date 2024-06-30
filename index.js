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



app.get("/", async (req,res) => {

    const imgs = await getBookById();

    console.log(imgs);
    res.render("index.ejs", { imgs });
});



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
    }
    
}












app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  });
  