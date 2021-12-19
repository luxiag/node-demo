const expressJwt = require("express-jwt");
const { PRIVATE_KEY } = require("../config/keys");

const jwtAuth = expressJwt({
  secret: PRIVATE_KEY,
  algorithms: ["HS256"],
  credentialsRequired: true, // 设置为false就不进行校验了，游客也可以访问
}).unless({
  path: ["/", "/user/login"],
});

module.exports = jwtAuth;
