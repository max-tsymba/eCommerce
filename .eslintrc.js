module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: [
    'react',
    'jsx-a11y',
    'prettier',
    'import',
    '@typescript-eslint',
    'sonarjs',
    'no-loops',
    'promise',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: false,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'arrow-body-style': 0,
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/default-props-match-prop-types': 0,
    'require-await': 'error',
    'prettier/prettier': ['error'],
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'newline-before-return': 'error',
    'no-shadow': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'react/button-has-type': 0,
    'import/prefer-default-export': 0,
    'no-return-assign': 0,
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': [
      'error',
      { arrow: true, return: true, declaration: true },
    ],
    'spaced-comment': ['error', 'always'],
    'unused-imports/no-unused-imports': 0,
    'no-underscore-dangle': 0,
    'no-use-before-define': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-plusplus': 0,
    'class-methods-use-this': 0,
    'global-require': 0,
    allowTernary: 0,
    'sonarjs/cognitive-complexity': ['error', 30],
    'no-loops/no-loops': 2,
    'max-len': [
      'warn',
      {
        code: 80,
        tabWidth: 2,
        comments: 200,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
      },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
};
