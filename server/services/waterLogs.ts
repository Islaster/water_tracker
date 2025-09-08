import { pool } from "../db/db";

export async function createWaterLog(
  amount: number,
  unit: string,
  user_id: number
) {
  const query = `
        INSERT INTO water_logs (amount, unit, user_id)
        VALUES($1, $2, $3)
        RETURNING *;
    `;

  const values = [amount, unit, user_id];
  const { rows } = await pool.query(query, values);
  return rows[0];
}

export async function getWaterLogs() {
  const query = `
        SELECT * FROM water_logs
    `;

  const { rows } = await pool.query(query);
  return rows;
}
