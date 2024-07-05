// @ts-nocheck

import React from "react";
import handleKeyDown from "./handlers/handle-key-down";

/**
 * A hook that handles key down events.
 * @param {Object} editor - The editor object.
 * @returns {function(): void} - A function that handles key down events.
 */
export const useOnKeyDown = (editor) =>
	React.useCallback(
		(event) => {
			handleKeyDown(event, editor);
		},
		[editor],
	);
