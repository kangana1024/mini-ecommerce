import mongoose from '../../configs/mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  items: [
    {
      pid: { type: String },
      name: { type: String },
      price: { type: Number },
      qty: { type: Number },
    }
  ],
  amount: { type: Number },
  vat: { type: Number },
  status: { type: String, enum: ['pending', 'failed', 'success'], default: 'pending' }
});

const Order = mongoose.model('order', orderSchema);

export default Order;