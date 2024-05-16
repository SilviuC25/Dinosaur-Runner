import { useEffect } from 'react';
import * as Constants from '../constants/gameConstants';

const useIncreaseSpeed = (setObstacleSpeed: React.Dispatch<React.SetStateAction<number>>, gameOver: boolean): void => {
  useEffect(() => {
    const speedIncreaseInterval = setInterval(() => {
      if (!gameOver) {
        setObstacleSpeed((prevSpeed) => prevSpeed + Constants.OBSTACLE_SPEED_INCREMENT);
      }
    }, Constants.OBSTACLE_SPEED_INCREMENT_INTERVAL);
    return () => clearInterval(speedIncreaseInterval);
  }, [gameOver, setObstacleSpeed]);
};

export default useIncreaseSpeed;