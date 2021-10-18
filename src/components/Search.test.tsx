import { screen } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import Search from "./Search";

describe('<Search />', () => {
    it('should render correctly', () => {
        const searchKeyword = jest.fn()
        render(<Search searchKeyword={searchKeyword} term="demo search" />)
        expect(screen.getByTestId('input-element')).toBeVisible()

        const inputElement = screen.getByTestId('input-element')

        fireEvent.change(inputElement, { target: { value: 'search text' } })

        expect(searchKeyword).toBeCalled();
    })
})