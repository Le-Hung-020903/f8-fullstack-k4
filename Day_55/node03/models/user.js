// tư duy model:
// - mỗi model sẽ tương ứng với 1 table
// - 1 controller có thể có nhiều model
const sql = require("../utils/db");
module.exports = {
  all: (status, keyword) => {
    let filter = sql`WHERE name IS NOT NULL`;
    if (status === "active" || status === "inactive") {
      filter = sql`${filter} AND (status = ${
        status === "active" ? true : false
      })`;
    }
    if (keyword) {
      filter = sql`${filter} AND (name ILIKE ${
        "%" + keyword + "%"
      } OR email ILIKE ${"%" + keyword + "%"})`;
    }
    return sql`SELECT * FROM USERS ${filter} order by id`;
  },
  checkEmail: (email) => {
    return sql`SELECT * FROM USERS WHERE email = ${email}`;
  },
  create: ({ name, email, status }) => {
    return sql`INSERT INTO USERS(name,email,status) VALUES(${name},${email},${status})`;
  },
  getUser: (id) => {
    return sql`SELECT * FROM USERS WHERE id = ${id}`;
  },
  update: ({ id, name, email, status }) => {
    return sql`UPDATE USERS SET name=${name},email=${email},status=${status} WHERE id=${id}`;
  },
  delete: (id) => {
    return sql`DELETE FROM USERS WHERE id=${id}`;
  },
};
