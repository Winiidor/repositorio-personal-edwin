const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Inicialització de Taules
const initDB = async () => {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS scores (
            id SERIAL PRIMARY KEY,
            username TEXT,
            score INTEGER NOT NULL
        );
    `);
};
initDB();

// Registre i Login
app.post('/auth', async (req, res) => {
    const { username, password, isLogin } = req.body;
    try {
        if (isLogin) {
            const user = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
            if (user.rows[0] && await bcrypt.compare(password, user.rows[0].password)) {
                return res.json({ success: true, username });
            }
            return res.status(401).json({ success: false, msg: 'Error de login' });
        } else {
            const hash = await bcrypt.hash(password, 10);
            await pool.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
            res.json({ success: true, msg: 'Creat' });
        }
    } catch (e) { res.status(400).json({ success: false }); }
});

// Puntuacions
app.post('/score', async (req, res) => {
    await pool.query('INSERT INTO scores (username, score) VALUES ($1, $2)', [req.body.username, req.body.score]);
    res.sendStatus(201);
});

app.get('/leaderboard', async (req, res) => {
    const result = await pool.query('SELECT username, score FROM scores ORDER BY score DESC LIMIT 5');
    res.json(result.rows);
});

app.listen(3000);
