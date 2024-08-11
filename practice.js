import pg from 'pg';
import bodyParser from 'body-parser';

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "world",
    password: "201338192Mb@s@",
    port: 5432,
  });

db.connect();
const currentUserId = 2;
async function getCurrentUser(){
    const result =  await db.query("SELECT * FROM users");
    let users = result.rows
    return users.find((user) => user.id === currentUserId);
};

console.log( await getCurrentUser());
