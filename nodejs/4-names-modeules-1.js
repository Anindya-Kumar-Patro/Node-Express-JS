// LOCAL
const sanu = 'sanu'

// SHARED
const akp = 'akp'
const muffin  = 'muffin'

// console.log(module)
// This is what the below output looks like, here the exports 
// is empty {} hence we are filling whatever we want to share
// {
//     id: '/Users/anindya/Documents/NodeJS/4-names-modeules-1.js',
//     path: '/Users/anindya/Documents/NodeJS',
//     exports: {},
//     filename: '/Users/anindya/Documents/NodeJS/4-names-modeules-1.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/anindya/Documents/NodeJS/node_modules',
//       '/Users/anindya/Documents/node_modules',
//       '/Users/anindya/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

module.exports = {akp, muffin}
// console.log(module)
// {
//     id: '.',
//     path: '/Users/anindya/Documents/NodeJS',
//     exports: { akp: 'akp', muffin: 'muffin' },
//     filename: '/Users/anindya/Documents/NodeJS/4-names-modeules-1.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/anindya/Documents/NodeJS/node_modules',
//       '/Users/anindya/Documents/node_modules',
//       '/Users/anindya/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }
// Alternate methods
// module.exports.item = 'sanu'
// module.export.anindya = akp
