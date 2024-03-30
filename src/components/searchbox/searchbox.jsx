import css from '../searchbox/searchbox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={css['SearchBox']}>
      <label>Find contacts by name</label>
      <input
        className={css['inputSearchBox']}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
export default SearchBox;
