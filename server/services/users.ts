import { pool } from "../db/db";

export async function createUser(
  username: string,
  password: string,
  email: string
) {
  const query = `
        INSERT INTO users (username, password, email)
        VALUES($1, $2, $3)
        RETURNING *;
    `;

  const values = [username, password, email];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export async function findUserById(id: number) {
  const query = `
        SELECT * FROM users WHERE id = $1;
    `;

  const values = [id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export async function findAllUsers() {
  const query = `
        SELECT * FROM users;
    `;
  const { rows } = await pool.query(query);
  return rows;
}

export async function editUser(editValue: string, id: number, column: string) {
  const query = `
        UPDATE users
        set ${column} = $1
        WHERE id = $2
        RETURNING *;
    `;
  const values = [editValue, id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export async function deleteUser(id: number) {
  const query = `
    DELETE FROM users
    WHERE id = $1;
    `;
  const values = [id];
  const result = await pool.query(query, values);
  return (result.rowCount ?? 0) > 0;
}
