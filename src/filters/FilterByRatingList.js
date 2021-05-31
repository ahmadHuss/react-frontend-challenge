import { useState } from 'react';
import Checkbox from '../components/Checkbox';
import RatingStar from '../components/RatingStar';
import { handleToggle } from '../utils';

const FilterByRatingList = ({ list, handleFilters, defaultCheckboxes }) => {
  const [checkedArray, setCheckedArray] = useState(defaultCheckboxes);

  const onChangeHandler = (checkboxId) => {
    const newState = handleToggle(checkboxId, checkedArray);
    setCheckedArray(newState);
    handleFilters(newState);
  };

  return list.map((item, index) => {
    if (index === 0) {
      return (
        <div key={index}>
          <Checkbox
            label="Any Rating"
            id={item.name}
            checked={checkedArray.indexOf(item.id) !== -1}
            onChangeHandler={() => onChangeHandler(item.id)}
          />
        </div>
      );
    } else {
      return (
        <div key={index}>
          <Checkbox
            id={item.name}
            checked={checkedArray.indexOf(item.id) !== -1}
            onChangeHandler={() => onChangeHandler(item.id)}
          >
            <RatingStar rating={index} />
          </Checkbox>
        </div>
      );
    }
  });
};

export default FilterByRatingList;
