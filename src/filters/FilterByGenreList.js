import { useState } from 'react';
import { handleToggle } from '../utils';
import Checkbox from '../components/Checkbox';

const FilterByGenreList = ({ list, handleFilters, defaultCheckboxes }) => {
  const [checkedArray, setCheckedArray] = useState(defaultCheckboxes);

  const onChangeHandler = (checkboxId) => {
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    handleFilters(newState);
  };

  return list.map((item, index) => {
    return (
      <div key={index}>
        <Checkbox
          label={item.label}
          id={item.name}
          checked={checkedArray.indexOf(item.id) !== -1}
          onChangeHandler={() => onChangeHandler(item.id)}
        />
      </div>
    );
  });
};

export default FilterByGenreList;
