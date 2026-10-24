import reactHooks from 'eslint-plugin-react-hooks';
import base from './base.js';
import globals from 'globals';
export default [
  ...base,
  reactHooks.configs.flat.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
