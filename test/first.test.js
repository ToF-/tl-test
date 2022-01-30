import "@testing-library/jest-dom";
import {create_button} from "../src/create-button.js";
import {getByText} from "@testing-library/dom";

test('has a click me button', () => {
    const result = create_button();
    let button = getByText(result, "Click Me");
    expect(button).toBeDefined();
});
