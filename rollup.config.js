// support plugin
import json from 'rollup-plugin-json'
import inject from 'rollup-plugin-inject'
import resolve from 'rollup-plugin-node-resolve' // resolve as a node module
import commonjs from 'rollup-plugin-commonjs' // commonjs -> es5
import babel from 'rollup-plugin-babel';

const NODE_ENV = process.env.NODE_ENV

const plugins = [
  json({ preferConst: true }), // covert json import with es6
  resolve(),
  commonjs({
    extensions: [ '.js', '.json' ],
  }),
  babel({
    runtimeHelpers: true,
    exclude: 'node_modules/**'
  }),
  inject({
    include: 'src/**/*.js',
    __DEV__: NODE_ENV === 'DEV'
  })
]

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js', // outputfile
    format: 'cjs', // commandjs
    name: 'telescope',
    sourcemap: NODE_ENV === 'DEV'
  },
  plugins: plugins
}