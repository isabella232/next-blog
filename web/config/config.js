const defaultUrl = "http://localhost:1337";

const configuration = {
  strapiUrl: process.env.API_URL ? process.env.API_URL : defaultUrl,
};

module.exports = {
  configuration,
};
