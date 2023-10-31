const express = require("express")
const app = express()
const mysql = require("mysql2")
const bcrypt = require("bcrypt")
app.use(express.json())


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ad123456',
  database: 'brayan'
});
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    throw err;
  }
  console.log('Connected to the database');
});


app.post("/createUser", async (req, res) => {
  const user = req.body.name;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  db.query('SELECT * FROM auth WHERE user = (?) ', [user], (selectErr, selectResults) => {
    if (selectErr) {
      console.error('Select query error:', selectErr);
      return res.status(500).json({ message: 'Database error' });
    }

    if (selectResults.length != 0) {
      return res.status(404).json({ message: 'User already exists' });
    } 
    else {
      db.query('INSERT INTO auth VALUES (?, ?, ?)', [0,user,hashedPassword], (insertErr, insertResults) => {
        if (insertErr) {
          console.error('Insert query error:', insertErr);
          return res.status(500).json({ message: 'Database error' });
        }
        return res.status(200).json({ message: 'Registered successfully' });
      });
    }
  });
});

app.post("/login", (req, res)=> {
  const user = req.body.name
  const password = req.body.password

  db.query('SELECT * FROM auth WHERE user = (?) ', [user], (logErr, logResults) => {
    if (logErr) {
      console.error('Select query error:', selectErr);
      return res.status(500).json({ message: 'Database error' });
    }

    if (logResults.length ==0) {
      return res.status(404).json({ message: 'User doesnt exist' });
    } 
    else {
      const hashedPassword = logResults[0].password
      bcrypt.compare(password, hashedPassword, (compareErr, passwordMatch) => {
        if (compareErr) {
          console.error('Password comparison error:', compareErr);
          return res.status(500).json({ message: 'Database error' });
        }
  
        if (passwordMatch) {
          console.log("---------> Login Successful");
          res.send(`${user} is logged in!`);
        } else {
          console.log("---------> Password Incorrect");
          res.status(401).json({ message: 'Password incorrect!' });
        }
      });
    }
  });
 
});



const port = 3000
app.listen(port, 
()=> console.log(`Server Started on port ${port}...`))