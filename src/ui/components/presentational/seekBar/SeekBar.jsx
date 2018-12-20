import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    margin: 'auto',
    padding: '0px 5px 0px 5px',
  },
  slider: {
    padding: '10px 0px 10px 0px',
  },
  sliderTrackAfter: {
    backgroundColor: 'white',
    opacity: 0.5,
  },
};

class SeekBar extends Component {
  static propTypes = {
    currentTime: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    seekTo: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    currentTime: 0,
    startTime: 0,
    endTime: Infinity,
  }

  constructor(props) {
    super(props);
    this.handleSliderValueChange = this.handleSliderValueChange.bind(this);
  }

  getSliderValue() {
    const { currentTime, startTime, endTime } = this.props;
    return ((currentTime - startTime) / (endTime - startTime)) * 100 || 0;
  }

  handleSliderValueChange(event, value) {
    const { startTime, endTime } = this.props;
    const seekTime = (endTime - startTime) * (value / 100);
    this.props.seekTo(seekTime);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Slider
          classes={{ container: classes.slider, trackAfter: classes.sliderTrackAfter }}
          value={this.getSliderValue()}
          aria-labelledby="label"
          onChange={this.handleSliderValueChange}
        />
      </div>
    );
  }
}

export { SeekBar };
export default withStyles(styles)(SeekBar);
