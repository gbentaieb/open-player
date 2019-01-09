import React from 'react';
import { connect } from 'react-redux';
import ControlsWrapper from '../../presentational/controlswrapper/ControlsWrapper';

import PlayPauseButtonContainer from '../playPauseButton/PlayPauseButtonContainer';
import SeekBarContainer from '../seekBar/SeekBarContainer';
import FullscreenButtonContainer from '../fullscreenButton/FullscreenButtonContainer';

function mapStateToProps() {
  return {};
}

const ControlsContainer = () => (
  <ControlsWrapper>
    <PlayPauseButtonContainer />
    <SeekBarContainer />
    <FullscreenButtonContainer />
  </ControlsWrapper>
);


export default connect(
  mapStateToProps,
)(ControlsContainer);
