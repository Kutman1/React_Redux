import { connect } from 'react-redux';
import {setFilter, setSearchQuery} from '../actions/filter';
import Filter from "../components/Filter";





const mapStateToProps = ({ filter }) => ({
    filterBy: filter.filterBy,

});


const mapDispatchToProps = dispatch => ({
    setFilter: filter => dispatch(setFilter(filter)),
    setSearch: value => dispatch(setSearchQuery(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);