const mongoose = require("mongoose");

const Group = require("./models/Group");

const groupDoc = new Group({
  groupname: 'Foo',
  email: 'foo@gmail.com',
  mobile: 1234567,
  profile: 'ggg.com',
  avatarimage: 'hello'
  });



  
console.log(groupDoc);