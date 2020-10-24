import Product from '../models/product';

export default {
  Query: {
    async products() {
      try {
        return await Product.find();
      } catch (error) {
        return []
      }
    }
  }
};