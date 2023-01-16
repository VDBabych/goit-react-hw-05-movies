import { BiSearchAlt } from 'react-icons/bi';

export const SearchForm = ({ submitAction, startInputText }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.query.value.trim();
    if (!inputValue) return;
    submitAction(inputValue);
  };
  return (
    <form onSubmit={onFormSubmit} className="SearchForm">
      <button type="submit" className="SearchForm-button">
        <BiSearchAlt size={15} />
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        defaultValue={startInputText}
        name="query"
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
    </form>
  );
};
