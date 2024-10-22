import React from "react";
import { SoleInk } from ".";
import {
	render,
	screen,
	cleanup,
	fireEvent,
	waitFor,
	act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SoleInk - Component", () => {
	afterEach(() => {
		cleanup();
	});

	const editorID = "editor";

	describe("without initialValue", () => {
		beforeEach(() => {
			render(<SoleInk />);
		});

		it("should render without crashing", () => {
			const editor = screen.getByTestId(editorID);
			expect(editor).toBeInTheDocument();
		});

		it("should render the default value if no initialValue is provided", () => {
			const editor = screen.getByTestId(editorID);
			expect(editor).toHaveTextContent(
				"This is the initial value of the editor.",
			);
		});
	});

	describe("with initialValue", () => {
		it("should render the provided initialValue if it is provided", () => {
			render(<SoleInk initialValue="Hello, World!" />);
			const editor = screen.getByTestId(editorID);
			expect(editor).toHaveTextContent("Hello, World!");
		});

		it("user types into the editor", async () => {
			const user = userEvent.setup();

			render(<SoleInk initialValue="Hello, World!" />);
			const editable = screen.getByRole("textbox");
			await user.type(editable, "!!");
			expect(editable.textContent).toBe("Hello, World!!!");
		});
	});
});
