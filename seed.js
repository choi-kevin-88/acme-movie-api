const { syncAndSeed, conn } = require("./test/db");

const seed = async () => {
  await syncAndSeed();
  conn.close();
};

seed();
