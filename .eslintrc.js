module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"],
      },
    },
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "babel-eslint",
  plugins: [
    "react",
    "prefer-arrow",
  ],
  rules: {
    "import/extensions": 0,
    "react/prop-types": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-uses-react": 0,
    "import/prefer-default-export": 0,
    "max-classes-per-file": "off",
    "@next/next/no-img-element": "off",
    "react/display-name": 1,
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "no-alert": "off",
    "no-unneeded-ternary": "error",
    "func-style": [
      "error",
      "expression",
    ],
    "no-console": "error",
    "no-duplicate-imports": "error",
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 0,
        maxBOF: 0,
      },
    ],
    "computed-property-spacing": [
      "error",
      "never",
    ],
    "array-bracket-spacing": [
      "error",
      "never",
    ],
    "object-curly-spacing": [
      "error",
      "always",
    ],
    "no-trailing-spaces": [
      2,
      {
        skipBlankLines: true,
      },
    ],
    "eol-last": [
      "error",
      "always",
    ],
    "lines-between-class-members": [
      "error",
      "always",
    ],
    "space-before-blocks": 2,
    indent: [
      "error",
      2,
    ],
    quotes: [
      "error",
      "double",
    ],
    semi: [
      "error",
      "always",
    ],
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "arrow-body-style": "error",
    "no-confusing-arrow": "error",
    "prefer-arrow-callback": "warn",
    "key-spacing": "error",
    "keyword-spacing": [
      "error",
      {
        after: true,
        before: true,
      },
    ],
    "rest-spread-spacing": "error",
    "no-useless-rename": "error",
    "no-irregular-whitespace": "error",
    "comma-style": [
      "error",
      "last",
    ],
    "comma-dangle": [
      "error",
      "always-multiline",
    ],
    "no-return-assign": "off",
    "no-multi-spaces": "error",
    "space-infix-ops": "error",
    "spaced-comment": "error",
    curly: [
      "error",
      "multi-line",
    ],
    "no-underscore-dangle": 0,
    "nonblock-statement-body-position": [
      "error",
      "beside",
    ],
    "react/jsx-filename-extension": [
      0,
    ],
    "no-shadow": "off",
    "object-curly-newline": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "no-unused-expressions": 0,
    "react/jsx-props-no-spreading": 0,
    "no-nested-ternary": 0,
    "react/no-array-index-key": 0,
    "consistent-return": 0,
  },
};
