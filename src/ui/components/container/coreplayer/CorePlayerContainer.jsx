import { connect } from 'react-redux';
import RxPlayer from 'rx-player';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';
import { setPlayerState, setPlayerTimes } from '../../../actions/CoreActions';

export function mapStateToProps(state) {
  return {
    RxPlayer,
    url: state.config.url,
    playRequested: state.core.playRequested,
    seekingTime: state.core.seekingTime,
  };
}

export default connect(
  mapStateToProps,
  {
    setPlayerState,
    setPlayerTimes,
  },
)(CorePlayer);
