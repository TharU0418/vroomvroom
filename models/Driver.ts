import mongoose from 'mongoose';

const DriverSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  contact: String,
  star: String,
  description: String,
  images: [String],
}, {
  timestamps: true,
  collection: 'hire-drivers' 
});

export default mongoose.models.Driver || mongoose.model('Driver', DriverSchema);
