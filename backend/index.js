import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = 3001;


app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '23.11.2002',
  database: 'rentify'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.post('/signup', async (req, res) => {
  const { role, firstname, lastname, email, phone_number, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (role, firstname, lastname, email, phone_number, password) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [role, firstname, lastname, email, phone_number, hashedPassword], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).send('Error inserting user');
      return;
    }
    res.status(200).send('User created successfully');
  });
});


// Login endpoint
// Login endpoint
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      if (result.length === 0) {
        res.status(401).json({ error: 'Invalid email or password' });
      } else {
        const user = result[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          res.status(200).json({ message: 'Login successful', role: user.role }); // Include role property in response
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    });
  });
  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
