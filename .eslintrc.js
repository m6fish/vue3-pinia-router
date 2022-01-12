module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2020: true
	},
	extends: ["airbnb-base", "plugin:vue/vue3-essential", "plugin:vue/vue3-recommended"],
	rules: {
		"vue/no-parsing-error": [
			"error",
			{
				"control-character-in-input-stream": false
			}
		],
		"import/no-extraneous-dependencies": ["error", { devDependencies: true }],
		"no-param-reassign": ["error", { props: false }],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		indent: ["error", "tab", { SwitchCase: 1 }],
		"comma-dangle": ["error", "never"],
		"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
		quotes: ["error", "double"],
		"prefer-template": ["off"],
		"no-continue": ["off"],
		"max-len": ["off"],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "always",
				jsx: "never",
				ts: "always",
				tsx: "never"
			}]
	},
	globals: {
		defineProps: "readonly",
		defineEmits: "readonly",
		defineExpose: "readonly",
		withDefaults: "readonly"
	}
};
