import React from 'react';
import pt from 'prop-types';
import './bottomBar.scss';
import ReactTooltip from 'react-tooltip';
import getTimeString from '../../util/getTimeString';
import { playStates } from '../../constants/PlayState';

const BottomBar = ({
  artworkUrl,
  artist,
  title,
  currentTimeInSec,
  endTimeInSec,
  playState,
  playingTrackId,
  startPlay,
  pause,
  changeSongCurrentTime
}) => {


  let playOrPauseButton;
  if(playState === playStates.PAUSED)
    playOrPauseButton = <img src={require('./img/play.png')} role="button" onClick={() => startPlay(playingTrackId)}/>;
  else if(playState === playStates.PLAYING)
    playOrPauseButton = <img src={require('./img/pause.png')} role="button" onClick={() => pause()}/>;

  const onSliderChange = (event) => {
    changeSongCurrentTime(event.target.value);
  }

  return (
    <div className="bottom-bar">
      <div className="img-wrap">
        <img src={artworkUrl} />
      </div>

      <div className="info">
        <h5 data-tip={title}>{title}</h5>
        <p data-tip={artist}>{artist}</p>
      </div>
      <div className="controls">
        <img src={require('./img/backward.png')} role="button"/>
        {playOrPauseButton}
        <img src={require('./img/forward.png')} role="button"/>
      </div>
      <div className="seek-slider">
        <span>{getTimeString(currentTimeInSec)}</span>
        <input type="range"
          name="seek"
          id="points"
          step={1}
          min={0} max={endTimeInSec}
          value={currentTimeInSec}
          onChange={(event) => onSliderChange(event)}
        />
        <span>{getTimeString(endTimeInSec)}</span>
      </div>
      <div className="repeat-shuffle">
        <img src={require('./img/repeat.png')} role="button"/>
        <img src={require('./img/shuffle.png')} role="button"/>
      </div>
      <div className="volume-slider">
        <img src={require('./img/sound.png')} />
        <input type="range" name="volume" id="volume" min="0" max="100" />
      </div>
      <ReactTooltip place="top" effect="float" className="tooltip"/>
    </div>
  );
}

BottomBar.propTypes = {
  artworkUrl: pt.string.isRequired,
  artist: pt.string.isRequired,
  title: pt.string.isRequired,
  currentTimeInSec: pt.number.isRequired,
  endTimeInSec: pt.number.isRequired,
  playState: pt.string.isRequired,
  playingTrackId: pt.number.isRequired,
  startPlay: pt.func.isRequired,
  pause: pt.func.isRequired
}

export default BottomBar;
