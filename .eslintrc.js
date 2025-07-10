module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'cypress/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended'
  ],
  plugins: [
    'cypress'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Cypress specific rules
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn'
  }
}
