import PropTypes from 'prop-types';
import './Filter.module.css';

const Filter = ({ filter, changeFilterInput }) => (
  <input
    type="text"
    name={filter}
    onChange={changeFilterInput}
    placeholder="Find contacts by name"
  />
);

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilterInput: PropTypes.func,
};
export default Filter;
