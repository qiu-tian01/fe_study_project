export default {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'cjs'
    }
  };

// export default [
//     {
//         input: 'src/index.js',
//         output: {
//           file: 'dist/bundle.js',
//           format: 'cjs'
//         }
//       },
//       {
//         input: 'src/index-b.js',
//         output: {
//           file: 'dist/bundle-b.js',
//           format: 'amd'
//         }
//       }
// ]