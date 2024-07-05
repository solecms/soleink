// @ts-nocheck

/**
 * Handles key down events to perform undo or redo actions based on key pressed.
 *
 * @param {KeyboardEvent} event - The key down event.
 * @param {Object} editor - The editor object.
 */
const handleKeyDown = (event, editor) => {
	if (!event.ctrlKey) {
		return;
	}

	switch (event.key) {
		case "z": {
			event.preventDefault();
			console.log("undo triggered");
			editor.undo();
			break;
		}

		case "y": {
			event.preventDefault();
			editor.redo();
			break;
		}
		default: {
			break;
		}
	}
};

export default handleKeyDown;
