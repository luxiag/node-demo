const expressJwt = require("express-jwt");
const { PRIVATE_KEY } = require("../config/keys");

const jwtAuth = expressJwt({
  secret: PRIVATE_KEY,
  algorithms: ["HS256"],
  credentialsRequired: false, // 设置为false就不进行校验了，游客也可以访问
}).unless({
  path: ["/", "/users/login", "/static"],
});

module.exports = jwtAuth;
