import { useEffect } from 'react';
import { Obstacle } from '../datatypes/ObstacleInterface';
import * as Constants from '../constants/gameConstants';

const useMoveObstacles = (obstacles: Obstacle[], 
  setObstacles: React.Dispatch<React.SetStateAction<Obstacle[]>>,
  obstacleSpeed: number, gameOver: boolean): void => {
  useEffect(() => {
    const moveObstacles = () => {
      if (!gameOver) {
        const updatedObstacles = obstacles.map((obstacle) => ({
          ...obstacle,
          x: obstacle.x + obstacleSpeed
        }));
        setObstacles(updatedObstacles);
      }
    };

    const interval = setInterval(moveObstacles, 
      Constants.MODIFY_POSITION_INTERVAL_OBSTACLE);

    return () => clearInterval(interval);
  }, [obstacles, setObstacles, gameOver]);
};

export default useMoveObstacles;