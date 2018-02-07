import { connect } from 'react-redux';
import RxPlayer from 'rx-player';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';

function mapStateToProps(state) {
  return {
    url: state.config.url,
    RxPlayer,
  };
}

export default connect(
  mapStateToProps,
  {
    /* add action functions */
  },
)(CorePlayer);
