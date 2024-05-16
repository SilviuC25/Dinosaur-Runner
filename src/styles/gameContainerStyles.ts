import * as Constants from '../constants/gameConstants';

export const gameContainerStyle: React.CSSProperties = {
  position: 'relative',
  width: `${Constants.GAME_WIDTH_PERCENTAGE * 100}vw`,
  height: '40vh',
  overflow: 'hidden',
  margin: '0 auto'
};

export const obstacleStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '0',
  right: '0'
};


export const dinosaurStyle: React.CSSProperties = {
  height: `${Constants.DINOSAUR_SIZE}px`,
	width: `${Constants.DINOSAUR_SIZE}px`,
  position: 'absolute',
  left: '80px'
};

export const gameOverStyle: React.CSSProperties = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '24px'
};
