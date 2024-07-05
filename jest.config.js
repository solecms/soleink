module.exports = {
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {
		"^.+\\.jsx?$": "babel-jest", // This line ensures Babel is used for .js and .jsx files
	},
	coveragePathIgnorePatterns: [
		"/node_modules/",
		"/tests/",
		"/dist/",
		"/pack/",
		"/coverage/",
		"/build/",
		"/src/lib/",
	],
};
