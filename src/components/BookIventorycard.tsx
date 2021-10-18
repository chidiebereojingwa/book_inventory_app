import React, { FC } from "react";
import { dataType } from "../App";

const BookInventory: FC<dataType> = ({
  name,
  publisher,
  isbn,
  authors,
  released,
}) => {
  return (
    <li className="list-item">
      <i className="fa fa-book"></i>
      &nbsp;
      {name}
      &nbsp;
      <li>Publisher: {publisher}</li>
      <li>ISBN: {isbn}</li>
      <li>Author: {authors}</li>
      <li>End Date: {released}</li>
    </li>
  );
};

export default BookInventory;
