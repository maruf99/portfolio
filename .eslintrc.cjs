module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['neon/common', 'neon/browser', 'neon/node', 'neon/typescript', 'neon/react', 'neon/jsx', 'neon/prettier'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		semi: 'error',
		radix: 'off',
		'no-duplicate-imports': 'error',
		'spaced-comment': 'off',
		'no-redeclare': 'off',
		'generator-star-spacing': 'off',
		'comma-dangle': 'off',
		'linebreak-style': 'off',
		'eol-last': 'off',
		'one-var': 'off',
		'newline-per-chained-call': 'off',
		'no-eq-null': 'off',
		'quote-props': 'off',
		'no-case-declarations': 'off',
		'no-negated-condition': 'off',
		'func-name-matching': 'off',
		curly: 'error',
		'no-restricted-globals': 'off',
		'id-length': 'off',
		'valid-typeof': 'off',
		'no-lonely-if': 'off',
		'prefer-named-capture-group': 'off',
		'no-undef': 'off',
		'no-param-reassign': 'off',
		'typescript-sort-keys/string-enum': 'off',
		'typescript-sort-keys/interface': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/no-base-to-string': 'off',
		'@typescript-eslint/no-throw-literal': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
		'@typescript-eslint/switch-exhaustiveness-check': 'off',
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/consistent-type-assertions': 'off',
		'@typescript-eslint/restrict-plus-operands': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/no-unnecessary-condition': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'@typescript-eslint/prefer-optional-chain': 'off',
		'@typescript-eslint/no-dynamic-delete': 'off',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/prefer-nullish-coalescing': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/method-signature-style': 'off',
		'@typescript-eslint/sort-type-union-intersection-members': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'@typescript-eslint/lines-between-class-members': 'off',
		'@typescript-eslint/promise-function-async': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/first': 'off',
		'import/extensions': 'off',
		'import/order': 'off',
		'n/prefer-global/process': 'off',
		'n/prefer-global/buffer': 'off',
		'n/callback-return': 'off',
		'unicorn/prefer-string-replace-all': 'off',
		'unicorn/catch-error-name': 'off',
		'unicorn/better-regex': 'off',
		'unicorn/numeric-separators-style': 'off',
		'unicorn/no-new-array': 'off',
		'unicorn/prefer-query-selector': 'off',
		'react/jsx-sort-props': 'off',
		'react/prefer-read-only-props': 'off'
	}
};
