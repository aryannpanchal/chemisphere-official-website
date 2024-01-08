import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
  },

  phonenumber: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },

});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;