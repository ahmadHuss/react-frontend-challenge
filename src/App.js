import { useState, useEffect } from 'react';
import Input from './components/Input';
import Dropdown from './components/Dropdown';
import FilterByRatingList from './filters/FilterByRatingList';
import FilterByGenreList from './filters/FilterByGenreList';
import { data, listRating, listGenre } from './data';

const App = () => {
  const [movies, setMovies] = useState(data);
  const [ratingIds, setRatingIds] = useState([]);
  const [genreIds, setGenreIds] = useState([]);
  const [selected, setSelected] = useState({
    rating: [],
    genre: []
  });

  /**
   * This function will update the selected filters state.
   *
   * @param {number[]} checkboxState - It will take the final state of checkboxes
   * @param {string} key - This key will help us to know the selected filters
   */
  const handleFilters = (checkboxState, key) => {
    const newFilters = { ...selected };
    if (key === 'rating') {
      setRatingIds(checkboxState);
      newFilters[key] = checkboxState.map((id) => listRating[id].value);
    } else if (key === 'genre') {
      setGenreIds(checkboxState);
      newFilters[key] = checkboxState.map((id) => listGenre[id].value);
    }
    setSelected(newFilters);
  };

  useEffect(() => {
    const filteredMovies = data
      .filter(
        (m) =>
          selected.rating.length === 0 ||
          selected.rating.includes(0) ||
          selected.rating.includes(Math.ceil(m.rating))
      )
      .filter(
        (m) =>
          selected.genre.length === 0 ||
          selected.genre.includes('') ||
          selected.genre.includes(m.genre)
      );
    setMovies(filteredMovies);
  }, [selected]);

  return (
    <div className="app">
      <div className="app__box">
        <div className="app__group">
          {/* Input Autocomplete */}
          <Input movies={movies} />

          <div className="app__append">
            {/* Dropdown for the rating filter */}
            <Dropdown title="Rating">
              <FilterByRatingList
                list={listRating}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'rating')
                }
                defaultCheckboxes={ratingIds}
              />
            </Dropdown>

            {/* Dropdown for the category filter */}
            <Dropdown title="Genre">
              <FilterByGenreList
                list={listGenre}
                handleFilters={(checkboxState) =>
                  handleFilters(checkboxState, 'genre')
                }
                defaultCheckboxes={genreIds}
              />
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
