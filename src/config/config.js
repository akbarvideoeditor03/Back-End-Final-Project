require("dotenv").config()
const config = {
  development: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host:process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  // development: {
  //   username: 'final_project_owner',
  //   password: 'sklU1gGK6pVP',
  //   database: 'final_project',
  //   host:'ep-cold-mouse-a1zjeq7m.ap-southeast-1.aws.neon.tech',
  //   dialect: "postgres",
  //   dialectOptions: {
  //     ssl: {
  //       require: true,
  //       rejectUnauthorized: false
  //     }
  //   }
  // },
  production: {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host:process.env.PGHOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
}

module.exports = config;