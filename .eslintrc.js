module.exports = {
  extends: ["airbnb", "prettier","plugin:jest/recommended"],
  plugins: ["import", "prettier", "jest"],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    "global-require": 0,
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "import/prefer-default-export": "off",
    "react/sort-comp": [1, {
      order: [
        'type-annotations',
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
    }]
  },
  "parser": "babel-eslint",
  "globals": {
    "SyntheticEvent": true,
    "SyntheticAnimationEvent": true,
    "SyntheticClipboardEvent": true,
    "SyntheticCompositionEvent": true,
    "SyntheticInputEvent": true,
    "SyntheticUIEvent": true,
    "SyntheticFocusEvent": true,
    "SyntheticKeyboardEvent": true,
    "SyntheticMouseEvent": true,
    "SyntheticDragEvent": true,
    "SyntheticWheelEvent": true,
    "SyntheticTouchEvent": true,
    "SyntheticTransitionEvent": true,
    "TimeoutID": true
  },
  
};
