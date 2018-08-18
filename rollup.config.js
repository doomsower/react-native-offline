import babel from 'rollup-plugin-babel';
import flow from 'rollup-plugin-flow';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react-native',
    'redux-saga',
    'redux-saga/effects',
    'prop-types',
    'react',
    'lodash',
    'hoist-non-react-statics',
  ],

  plugins: [
    flow(),
    babel({
      babelrc: false,
      presets: ['stage-2', 'react'],
      plugins: ['external-helpers'],
    }),
  ],
};
