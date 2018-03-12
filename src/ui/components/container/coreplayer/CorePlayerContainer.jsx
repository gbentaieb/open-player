import { connect } from 'react-redux';
import RxPlayer from 'rx-player';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';
import { setPlayerState } from '../../../actions/CoreActions';

function mapStateToProps(state) {
  return {
    RxPlayer,
    url: state.config.url,
    playRequested: state.core.playRequested,
  };
}

export default connect(
  mapStateToProps,
  {
    setPlayerState,
  },
)(CorePlayer);
