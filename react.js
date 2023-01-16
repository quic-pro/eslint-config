module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    extends: [
        'react-app',
        'plugin:jsx-a11y/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        'react',
        'jsx-a11y',
        'react-hooks',
        'simple-import-sort'
    ],
    rules: {
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'react/react-in-jsx-scope': 'off',
        'react-hooks/exhaustive-deps': 'off'
    }
};
