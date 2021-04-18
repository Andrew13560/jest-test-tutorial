import React from 'react';
// used to render things
import ReactDOM from 'react-dom';
// the component we are testing
import Button from './../button';
// react testing library
import { render, cleanup } from '@testing-library/react';
// jest dom which has extend and expect. new version
import "@testing-library/jest-dom/extend-expect";
// for snapshot testing
import renderer from "react-test-renderer";

// second parameter is a callback function where you write the test

// Cleans up after each test
afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
    // uses react testing library. Can get multiple things from this render. returns to getByTestId
    const { getByTestId } = render(<Button label="click me please" />);
    expect(getByTestId("button")).toHaveTextContent("click me please");
});

// Snapshot testing (important and cool)
it("matches snapshot", () => {
    // creates snapshot. converts to virtual dom project
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    // When it creates a tree, it goes and looks at the folder structure and looks/creates for a folder called snapshot
    expect(tree).toMatchSnapshot();
})

// Snapshot testing (important and cool)
it("matches snapshot", () => {
    // creates snapshot. converts to virtual dom project
    const tree = renderer.create(<Button label="click me please"></Button>).toJSON();
    // When it creates a tree, it goes and looks at the folder structure and looks/creates for a folder called snapshot
    expect(tree).toMatchSnapshot();
})