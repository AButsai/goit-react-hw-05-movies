import PropTypes from 'prop-types';
import { useState } from 'react';
import s from './Search.module.css';

const Search = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <input
          type="text"
          name="name"
          className={s.input}
          value={query}
          onChange={handleChange}
        />
      </label>
      <button className={s.button}>Search</button>
    </form>
  );
};

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Search;
