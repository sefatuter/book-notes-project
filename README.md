# book-notes-project

Technologies used: Javascript, EJS, HTML, CSS, Bootstrap, Node.js, MySQL

- Used Open Library Covers API to fetch book covers.
- Used axios, body-parser, ejs, express, pg packages.
- Created database to store books.
  
```
CREATE DATABASE "book-notes"; 
```
  
```
\c "book-notes"
```
  
```
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  book_name VARCHAR(255),
  id_num VARCHAR(50),
  description TEXT
);
```

  
## Running website

Clone this repo:

```
git clone https://github.com/sefatuter/book-notes-project.git
cd book-notes-project
```

Install Packages:

```
npm i
```

Change This Part According To Your Information

![image](https://github.com/sefatuter/book-notes-project/assets/95074982/22ce7082-a611-4ff8-b34b-0d2bcb95f72f)

## API Documentation

### Base URL:  ```http://localhost:3000/api```

**1. Retrieve All Books**

Endpoint : ```GET /books```

```
GET http://localhost:3000/api/books
```
Response:
    - Status: '200 OK'
    - Body:
        
        ```
        [
            {
                "book_name": "Çalıkuşu"
            },
            ...
        ]
        ```
 

**2. Retrieve All Book Descriptions**

Endpoint : ```GET /descriptions```

```
GET http://localhost:3000/api/descriptions
```

Response:
    - Status: '200 OK'
    - Body:
        
        ```
        [
            {
                "description": "Çalıkuşu by Reşat Nuri Güntekin is a beloved Turkish classic that transports readers to"
            },
            ...
        ]
        ```

- ![1](https://github.com/sefatuter/book-notes-project/assets/95074982/d808e080-27dc-41e1-86a4-18abdf7212af)


- ![2](https://github.com/sefatuter/book-notes-project/assets/95074982/3e67b3e5-f1d2-44ca-84ab-125c76b18dba)
