import mongoose from 'mongoose';

Object.keys(mongoose.connection.models).forEach(key => {
  delete mongoose.connection.models[key];
});

mongoose.connect(process.env.mongoConnUrl);
mongoose.Promise = global.Promise;

export default mongoose;