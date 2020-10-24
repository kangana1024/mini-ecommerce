const faker = require('faker');

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaaaeeeeiiiioooouuuunc------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}
function getRandomNumber() {
  return Math.floor(Math.random() * (3 - 0 + 1)) + 0;
}

function getRandomImage(index) {
  let images = [];
  images[0] = faker.image.nature(400,300);
  images[1] = faker.image.sports(400,300);
  images[2] = faker.image.technics(400,300);
  images[3] = faker.image.transport(400,300);

  return images[index];
}
function fakeData() {
  let fakeProduct = [];
  for (let index = 0; index < 200; index++) {
    const productname = faker.commerce.productName();
    fakeProduct.push({
      name: productname,
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      image: `${(getRandomImage(getRandomNumber()))}?random=${index+1} `,
      slug: string_to_slug(productname)
    })
  }
  return [...fakeProduct];
}
module.exports = [...fakeData()];