import { connect } from 'react-redux';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';

function mapStateToProps(state) {
  return {
    url: state.config.url,
  };
}

export default connect(
  mapStateToProps,
  {
    /* add action functions */
  },
)(CorePlayer);
