const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    // Specify the paths to all of the template files
    layers: ['utilities', 'base', 'components'],
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    // This is the function used to extract class names from the templates
    // defaultExtractor: (content) => {
    //   // Capture as liberally as possible, including things like `h-(screen-1.5)`
    //   const broadMatches = content.match(/[^<>"'`\\s]*[^<>"'`\\s:]/g) || [];
    //   // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    //   const innerMatches = content.match(/[^<>"'`\\s.()]*[^<>"'`\\s.():]/g) || [];

    //   return broadMatches.concat(innerMatches);
    // },
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
  },
];
// module.exports = {
//   plugins: [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-preset-env')({ stage: 2 }),
//     ...process.env.NODE_ENV === 'production'
//       ? [purgecss]
//       : []
//   ]
// };
const plugins = {
  'postcss-import': {},
  'tailwindcss': {},
  'postcss-preset-env': { stage: 2 },
}
// This branch definitly runs...
if (process.env.NODE_ENV === 'production') {
  // This doesn't seem to work. None of the css is purged...
  plugins['@fullhuman/postcss-purgecss'] = {
    layers: ['utilities', 'base', 'components'],
    content: [
      './pages/**/*.{js,jsx,ts,tsx}',
      './components/**/*.{js,jsx,ts,tsx}',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  }
}
module.exports = {
  plugins,
}