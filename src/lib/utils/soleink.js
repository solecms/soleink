/**
 * Set the initial value of the editor.
 * @param {string} value - The initial value of the editor.
 * @param {string} initialType - The initial type of the editor.
 * @returns {[{type: string, children: [{text: string}]}]} - An array of objects representing the initial value of the editor.
 */
export const setInitialValue = (value = "", initialType = "paragraph") => {
	const text = value || "This is the initial value of the editor.";
	return [
		{
			type: initialType,
			children: [{ text }],
		},
	];
};
