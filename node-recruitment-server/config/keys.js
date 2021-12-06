

const UPLOAD_PATH = './upload/avatar'


  module.exports = {
    CODE_ERROR: -1,
    CODE_TOKEN_EXPIRED: -2,
    CODE_SUCCESS: 0,
    PWD_SALT: 'node_recruitment-server',
    PRIVATE_KEY: 'node_recruitment-server-private-key',
    JWT_EXPIRED: 60 * 60, // token失效时间
    UPLOAD_PATH, // 上传文件路径
    UPDATE_TYPE_FROM_WEB: 1,
    mongoURI:'mongodb://localhost/node_recruitment_server'
  }
