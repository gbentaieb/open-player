import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BUFFERING, LOADING, LOADED, SEEKING } from '../../../constants/CoreStates';

export const isWaiting = playerState => (
  [BUFFERING, LOADING, LOADED, SEEKING].includes(playerState)
);

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Spinner = props => (
  isWaiting(props.playerState) &&
    <div>
      <CircularProgress className={props.classes.progress} />
    </div>
);

Spinner.propTypes = {
  classes: PropTypes.object.isRequired,
  playerState: PropTypes.string.isRequired,
};

export { Spinner };
export default withStyles(styles)(Spinner);
