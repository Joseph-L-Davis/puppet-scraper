import pool from '../utils/pool.js';

export default class Post {
    
  constructor(row){
    this.id = row.id;
    this.name = row.name;
    this.src = row.src;
  }

  static async insert(name, src) {
    const { rows } = await pool.query(
      `INSERT INTO posts (name, src)
            VALUES( $1, $2)
            RETURNING *
            `, [name, src]
    );
    return rows.map(post => new Post(post));
  }
}
 
