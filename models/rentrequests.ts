// // models/rentrequests.ts
import mongoose from 'mongoose';

const RentRequestsSchema = new mongoose.Schema({
  carId: String,
  userId: String,
  pickupDate: Date,
  returnDate: Date,
  pickupTime: String,
  pickupLocation: String,
  reason: {     
    type: String,
    default: '..'
  }, 
  status: {  
    type: String,
    enum: ['accept', 'reject', 'pending','on_going', 'completed','cancel'], // optional enum
    default: 'pending'
  },
  driver:{      // Add this
    type: Boolean,
    enum: [true, false], // optional enum
    default: false
  },
  history:{      // Add this
    type: Boolean,
    enum: [true, false], // optional enum
    default: false
  },
  delete:{      // Add this
    type: Boolean,
    enum: [true, false], // optional enum
    default: false
  },
}, {
  timestamps: true,
  collection: 'rent-requests'
});

export default mongoose.models.RentRequest || mongoose.model('RentRequest', RentRequestsSchema);
