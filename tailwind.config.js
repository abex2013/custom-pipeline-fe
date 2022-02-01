module.exports = {
  content: [
    './src/app/**/*.html',
    './src/app/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// module.exports = {
//   purge: {
//     enabled: process.env.NODE_ENV === 'production',
//     content: [
//     './app/**/*.html',
//     './app/**/*.js',
//     // './libs/**/*.html',
//     // './libs/**/*.js'
//   ]},
//     darkMode: false, // or 'media' or 'class'
//     theme: {
//       extend: {},
//     },
//     variants: {
//       extend: {},
//     },
//     plugins: [],
//   }
