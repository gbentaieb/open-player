import { connect } from 'react-redux';
import RxPlayer from 'rx-player';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';

function mapStateToProps(state) {
  return {
    RxPlayer,
    url: state.config.url,
    requestPlay: state.core.requestPlay,
  };
}

export default connect(
  mapStateToProps,
  {
    /* add action functions */
  },
)(CorePlayer);
