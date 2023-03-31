require("dotenv").config();

module.exports = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  dialectOptions: {
    useUTC: false, // for reading from database
    dateStrings: true,
    typeCast(field, next) {
      // for reading from database
      if (field.type === "DATETIME") {
        return field.string();
      }
      return next();
    },
  },
  timezone: "Asia/Manila",
  port: process.env.DB_PORT,
  useUTC: false,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 1800000,
    idle: 10000,
  },
  // logging: false,
};
