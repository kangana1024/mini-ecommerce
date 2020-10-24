const { Seeder } = require('mongo-seeding');
const config = {
  database: process.env.MONGO_URL,
  dropDatabase: true,
};


const seeder = new Seeder(config);
const path = require('path');
const collections = seeder.readCollectionsFromPath(path.resolve("./seeders/data"),
  {
    extensions: ['js', 'json', 'ts'],
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  });
try {
  seeder.import(collections);
} catch (err) {
  console.log(err);
}
