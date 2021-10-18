import { screen } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";


describe('<App />', () => {

    it('should render correctly', () => {
        render(<App/>)
        
        expect(screen.getByText('Loading...')).toBeVisible()
    })
})