const cfb = require("cfb.js");

const defaultClient = cfb.ApiClient.instance;

const ApiKeyAuth = defaultClient.authentications["ApiKeyAuth"];

ApiKeyAuth.apiKey =
  "S3jwPbEIdMnpNZfs06X90rM4jraUNbtCQ+g0t7t+pdDKqaiNVrc2eLEXdEeX5hhS";

ApiKeyAuth.apiKeyPrefix = "Bearer";

module.exports = cfb;
