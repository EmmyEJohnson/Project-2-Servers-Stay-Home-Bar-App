//MODELS message.js

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const messageSchema = new Schema({
//   send: {
//       type: ObjectId,
//       ref: 'User',
//       required: true
//   },

//   message: {
//       type: String,
//       required: true
//   },
//   date: {
//       type: Date
//   },
//   created_by: {
//       type: ObjectId,
//       ref: 'User',
//       required: true
//   },
//   thread: {
//       type: ObjectId,
//       ref: 'MsgThread',
//       required: true
//   },
//   is_deleted: [{
//       type: ObjectId,
//       ref: 'User'
//   }]
// }, {
//   timestamps: {
//       createdAt: 'created_at',
//       updatedAt: 'last_updated_at'
//   }
// });

// module.exports = mongoose.model('message', messageSchema);

// const msgThreadSchema = new Schema({
//   users: [{
//       type: ObjectId,
//       ref: 'User'
//   }],
//   group_name: {
//       type: String
//   },
//   created_by: {
//       type: ObjectId,
//       ref: 'User'
//   },
//   community: {
//       type: ObjectId,
//       ref: 'Community'
//   },
//   image_url: {
//       type: String
//   }
// }, {
//       timestamps: {
//           createdAt: 'created_at',
//           updatedAt: 'last_updated_at'
//       }
//   });

//   module.exports = mongoose.model('message', msgThreadSchema);
