import { connect } from 'react-redux';
import RxPlayer from 'rx-player';
import CorePlayer from '../../presentational/coreplayer/CorePlayer';
import { setPlayerState, setPlayerTimes, setForcedMuted } from '../../../actions/CoreActions';

export function mapStateToProps(state) {
  return {
    RxPlayer,
    url: state.config.url,
    playRequested: state.core.playRequested,
    seekingTime: state.core.seekingTime,
    forcedMuted: state.core.forcedMuted,
  };
}

export default connect(
  mapStateToProps,
  {
    setPlayerState,
    setPlayerTimes,
    setForcedMuted,
  },
)(CorePlayer);
