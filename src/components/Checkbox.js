import { Tick } from '../svgs';

// Fully control checkbox manged through parent prop `checked` and `onChange`
const Checkbox = ({ label, id, children, onChangeHandler, checked }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        className="checkbox"
        id={id ? id : 'custom-checkbox'}
        checked={checked}
        onChange={onChangeHandler}
      />
      <label className="checkbox__label" htmlFor={id ? id : 'custom-checkbox'}>
        <Tick />
        {typeof label === 'string' && label.length > 0 ? label : children}
      </label>
    </div>
  );
};
export default Checkbox;
