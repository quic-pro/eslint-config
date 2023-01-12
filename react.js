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
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
    ],
    plugins: [
        'simple-import-sort'
    ],
    rules: {
        'simple-import-sort/imports': 'error'
    }
};
