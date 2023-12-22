module.exports = {
	globals: {
		__PATH_PREFIX__: true,
	},
	extends: "plugin:vue/vue3-recommended",
	rules: {
		indent: ["warn", "tab", { SwitchCase: 1 }],
		semi: ["warn", "always"],
		quotes: ["warn", "double"],
	},
};
