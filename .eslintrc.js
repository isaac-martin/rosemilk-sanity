const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react', "plugin:prettier/recommended"],
  parser: 'babel-eslint',
  plugins: ["prettier"],
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'never'],
    "prettier/prettier": "error"
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.2.0'
    }
  }
}
