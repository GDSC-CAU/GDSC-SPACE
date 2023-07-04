// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
    extends: ['next', 'prettier', 'plugin:@typescript-eslint/recommended', 'plugin:tailwindcss/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        babelOptions: {
            presets: [require.resolve('next/babel')],
        },
    },
    rules: {
        'no-var': 'error',
        'no-console': 'warn',
        'prefer-const': 'warn',
        '@next/next/no-html-link-for-pages': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc', caseInsensitive: true },
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                'newlines-between': 'never',
                pathGroupsExcludedImportTypes: ['builtin'],
            },
        ],
    },
}
