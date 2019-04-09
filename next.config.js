const { parsed: localEnv } = require("dotenv").config();

module.exports = {
  target: "serverless",
  env: {
    ...localEnv
  }
};
