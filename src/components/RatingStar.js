import { Star, HalfStar, FullStar } from '../svgs';

/**
 * This function will check if the number is float or not.
 * @param n {Number} - Pass the number to check is it float?
 * @returns {boolean} - Returns result as a boolean
 */
const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
};

/**
 * This function will return the stars according to the rating.
 * @param rating {number} - Set the rating number
 * @param blankStars {number} - Set the blank stars
 * @param threshold {number} - Set the threshold for the total stars
 * @returns {JSX.Element} - Returns the JSX Nodes.
 */
const getFinalStars = (rating, blankStars, threshold) => {
  const filledStars = [...Array(Math.floor(rating))].map((_, index) => (
    <li key={index}>
      <FullStar />
    </li>
  ));
  const blankedStars = [...Array(Math.floor(blankStars))].map((_, index) => (
    <li key={index}>
      <Star />
    </li>
  ));

  if (isFloat(rating)) {
    const halvedStar = (
      <li key={`half`}>
        <HalfStar />
      </li>
    );
    return (
      <ul className="rating-star-list">
        {filledStars}
        {halvedStar}
        {blankedStars}
      </ul>
    );
  } else {
    return (
      <ul className="rating-star-list">
        {filledStars}
        {blankedStars}
      </ul>
    );
  }
};

const RatingStar = ({ rating, threshold = 10 }) => {
  let STARS;
  let blankStars = 0;
  if (rating > 0 && rating <= threshold) {
    blankStars = threshold - rating;
    STARS = getFinalStars(rating, blankStars, threshold);
  } else {
    STARS = (
      <ul className="rating-star-list">
        {[...Array(threshold)].map((_, index) => (
          <li key={index}>
            <Star />
          </li>
        ))}
      </ul>
    );
  }
  return STARS;
};

export default RatingStar;
