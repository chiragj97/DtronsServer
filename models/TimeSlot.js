const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeSlotSchema = new Schema({
  date: { type: Date, default: Date.now() },
  startTime: { type: String },
  endTime: { type: String },
  status: { type: Boolean },
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: Number },
});

const TimeSlot = mongoose.model('TimeSlot', timeSlotSchema);
module.exports = TimeSlot;
