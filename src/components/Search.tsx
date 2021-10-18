import React, { ChangeEvent, FC } from "react";

interface SearchPropType {
	term: string;
	searchKeyword: (searchTerm: string) => void;
}

const Search: FC<SearchPropType> = ({ term, searchKeyword }) => {
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		searchKeyword(e.target.value);
	}
	return (
		<div className="center">
			<input
				className="input-field"
				type="text"
				value={term}
				placeholder="Search for book"
				onChange={handleSearch}
				data-testid="input-element"
			></input>
		</div>
	);
}

export default Search;
