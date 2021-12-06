const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: { //用户名
    type: String,
    require: true
  },
  emial: {
    type: String,
    require:true
  },
  password: { //密码
    type: String,
    require: true
  },
  type: { // 用户类型: 
    type: Number,
    /**
     * 1 应聘者
     * 2 招聘者
     */
    enum: [1, 2],
    require: true
  },
  avatar: {  //avatar
    type: String
  },
  post: {  // 职位
    type: String
  },
  info: {  // 个人或职位简介
    type: String
  },
  company: { //公司名称
    type: String
  },
  salary: {  //工资
    type: String
  },
  created_time: {//创建时间
    type: Date,
    default: Date.now
  },
  last_modified_time: { //最后修改时间
    type: Date,
    default: Date.now
  }
})

module.exports = User = mongoose.model('users',UserSchema)