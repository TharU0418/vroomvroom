import mongoose from 'mongoose';

const BuyRequestsSchema = new mongoose.Schema({
  email: String,
  mobileNum: String,
  CarId: String,
  status: {      // Add this
    type: String,
    enum: ['accept', 'reject', 'pending'], // optional enum
    default: 'pending'
  }
}, {
  timestamps: true,
  collection: 'buy-requests'
});

export default mongoose.models.BuyRequest || mongoose.model('BuyRequest', BuyRequestsSchema);
