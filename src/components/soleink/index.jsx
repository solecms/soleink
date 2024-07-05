import React from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";
import { setInitialValue } from "../../lib/utils/soleink";
import { useOnKeyDown } from "../../lib/hooks";

/**
 * The editor component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.initialValue] - The initial value of the editor. (optional)
 * @returns {JSX.Element}
 *
 * @example
 * <SoleInk />
 *
 */
export const SoleInk = (props) => {
	const [editor] = React.useState(() => withHistory(withReact(createEditor())));

	const onKeyDown = useOnKeyDown(editor);

	return (
		// Add the editable component inside the context.
		<div data-testid="editor">
			<Slate editor={editor} initialValue={setInitialValue(props.initialValue)}>
				<Editable onKeyDown={onKeyDown} role="textbox" />
			</Slate>
		</div>
	);
};
