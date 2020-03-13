import { connect } from 'react-redux';
import { fetchProperties } from '../../actions/property_actions';
import { updateBounds } from '../../actions/filter_actions';
import Search from './search';

const mapStateToProps = (state) => ({
    properties: Object.values(state.entities.properties)
});

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties()),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
