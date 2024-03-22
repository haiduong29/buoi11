
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors=require("cors");

app.use(bodyParser.json());
  app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'bth223'
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

app.post('/AddInfo', (req, res) => {
  const { maTin, tieuDe, thuTu,noiDung } = req.body; 
  const sql = 'INSERT INTO bth223 (`maTin`, `tieuDe`, `thuTu`, `noiDung`) VALUES (?, ?, ?,?)';
  connection.query(sql, [maTin, tieuDe, thuTu,noiDung], (error, results, fields) => {
    if (error) {
     
      console.error('Error adding info:', error);
      res.status(500).json({ error: 'Failed to add info' });
      return;
    }
    res.json({ message: 'Info added successfully' });
  });
});
app.get('/Info', (req, res) => {
  const sql = 'SELECT * FROM bth223';

  connection.query(sql, (error, results, fields) => {
    if (error) {
      
      console.error('Error fetching infoes:', error);
      res.status(500).json({ error: 'Failed to fetch infoes' });
      return;
    }

    res.json(results);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});