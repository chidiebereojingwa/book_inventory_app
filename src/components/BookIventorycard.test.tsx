import { screen } from "@testing-library/dom";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import BookInventory from "./BookIventorycard";

describe('<BookInventory />', () => {
    const inventoryItem = {
        "url": "https://www.anapioficeandfire.com/api/books/1",
        "name": "A Game of Thrones",
        "isbn": "978-0553103540",
        "authors": [
          "George R. R. Martin"
        ],
        "numberOfPages": "694",
        "publisher": "Bantam Books",
        "country": "United States",
        "mediaType": "Hardcover",
        "released": "1996-08-01T00:00:00",
        "characters": [
          "https://www.anapioficeandfire.com/api/characters/2",
        ],
        "povCharacters": [
          "https://www.anapioficeandfire.com/api/characters/148"
        ]
      }

    it('should render correctly', () => {
        render(<BookInventory {...inventoryItem} />)
        
        expect(screen.getByText('A Game of Thrones')).toBeVisible()
        expect(screen.getByText('Publisher: Bantam Books')).toBeVisible()
        expect(screen.getByText('ISBN: 978-0553103540')).toBeVisible()
        expect(screen.getByText('Author: George R. R. Martin')).toBeVisible()
        expect(screen.getByText('End Date: 1996-08-01T00:00:00')).toBeVisible()
    })
})