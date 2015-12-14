var mongoose = require('mongoose');

var DataSchema = new mongoose.Schema({
  Name: String,
  Status: String,
  TimeRunning: Number,
  ConnectionsCurrent: Number,
  ConnectionsTotal: Number,
  ConnectionsTotalAccepted: Number,
  ConnectionsTotalRejected: Number,
  MessagesInBytesRate: Number,
  MessagesOutBytesRate: Number,
  ApplicationInstance: [{
    Name: String,
    TimeRunning: Number,
    ConnectionsCurrent: Number,
    ConnectionsTotal: Number,
    ConnectionsTotalAccepted: Number,
    ConnectionsTotalRejected: Number,
    MessagesInBytesRate: Number,
    MessagesOutBytesRate: Number,
    Stream: [{
      Name: String,
      SessionsFlash: Number,
      SessionsSanJose: Number,
      SessionsCupertino: Number,
      SessionsSmooth: Number,
      SessionsRTSP: Number,
      SessionsMPEGDash: Number,
      SessionsTotal: Number
    }]
  }]
});

module.exports = mongoose.model('Data', DataSchema);
