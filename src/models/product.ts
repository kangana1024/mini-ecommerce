import mongoose from '../../configs/mongoose';

const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  image: { type: String },
  slug: { type: String }
});

const Product = mongoose.model('products', productSchema);

export default Product;