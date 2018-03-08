import React, { Component } from 'react';
import { connect } from 'react-redux';
import ControlsWrapper from '../../presentational/controlswrapper/ControlsWrapper';

function mapStateToProps(/* state */) {
  return {};
}

class ControlsContainer extends Component {
  static propTypes = {
    /* Add proptypes */
  }

  static defaultProps = {
    /* Add default props */
  }

  render() {
    return (
      <ControlsWrapper>
        {/* <PlayPauseButton /> */}
        {/* <ProgressBar /> */}
      </ControlsWrapper>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    /* add action functions */
  },
)(ControlsContainer);
