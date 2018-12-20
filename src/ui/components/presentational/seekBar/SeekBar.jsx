import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/lab/Slider';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    width: '100%',
  },
  sliderContainer: {
    display: 'flex',
    width: '100%',
    margin: 'auto',
    padding: '0px 5px 0px 5px',
  },
  timeLabel: {
    margin: 'auto',
    padding: '0px 5px 0px 5px',
    color: 'white',
    fontSize: '0.7rem',
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

  static convertTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds / 60) % 60);
    const secs = Math.floor(seconds % 60);

    const stdHours = hours > 0 && hours < 10
      ? `0${hours}`
      : hours;
    const stdMins = mins < 10
      ? `0${mins}`
      : mins;
    const stdSecs = secs < 10
      ? `0${secs}`
      : secs;

    const hoursStr = stdHours ? `${stdHours}:` : '';
    const minsStr = `${stdMins}:`;
    const secsStr = stdSecs;

    return `${hoursStr}${minsStr}${secsStr}`;
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
    const { classes, currentTime, endTime } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.timeLabel}>
          <Typography variant="inherit" color="inherit">
            { SeekBar.convertTime(currentTime) }
          </Typography>
        </div>
        <div className={classes.sliderContainer}>
          <Slider
            classes={{ container: classes.slider, trackAfter: classes.sliderTrackAfter }}
            value={this.getSliderValue()}
            aria-labelledby="label"
            onChange={this.handleSliderValueChange}
          />
        </div>
        <div className={classes.timeLabel}>
          <Typography variant="inherit" color="inherit">
            {`-${SeekBar.convertTime(endTime - currentTime)}`}
          </Typography>
        </div>
      </div>
    );
  }
}

export { SeekBar };
export default withStyles(styles)(SeekBar);
