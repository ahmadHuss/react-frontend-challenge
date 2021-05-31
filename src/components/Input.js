import useAutocomplete from '@material-ui/lab/useAutocomplete';
import Highlighter from 'react-highlight-words';
import RatingStar from './RatingStar';

// By default this component uses an HTML Mark Text element (<strong>) to wrap matched text.
const Highlight = ({ children }) => <strong>{children}</strong>;

const Input = ({ movies }) => {
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    inputValue
  } = useAutocomplete({
    id: 'form-input',
    options: movies,
    autoComplete: true,
    clearOnBlur: false,
    getOptionLabel: (option) => option.title
  });

  // Custom Props for the input
  const InputProps = {
    className: 'form-input',
    placeholder: 'Enter the movie'
  };

  return (
    <div className="autocomplete">
      <div {...getRootProps()}>
        <input {...getInputProps()} {...InputProps} />
      </div>
      {groupedOptions.length > 0 ? (
        <ul className="form-input__box" {...getListboxProps()}>
          {groupedOptions.map((option, index) => {
            const highlighter = (
              <Highlighter
                searchWords={[inputValue]}
                autoEscape={true}
                textToHighlight={option.title}
                highlightTag={Highlight}
              />
            );
            return (
              <li {...getOptionProps({ option, index })}>
                <div className="form-input__item">
                  <div className="form-input__item-1">
                    {highlighter}
                    <div className="form-input__item-1--rating">
                      <RatingStar rating={option.rating} />
                    </div>
                  </div>
                  <div className="form-input__item-2">{option.genre}</div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Input;
