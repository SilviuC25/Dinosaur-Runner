import { useEffect } from 'react';
import * as Constants from '../constants/gameConstants';
import { Obstacle } from '../datatypes/ObstacleInterface';

const useGenerateObstacle = (
  setObstacles: React.Dispatch<React.SetStateAction<Obstacle[]>>, 
  gameOver: boolean
): void => {

  useEffect(() => {
    const generateObstacle = () => {
			const size = Constants.MIN_OBSTACLE_SIZE + Math.random() * 
        (Constants.MAX_OBSTACLE_SIZE - Constants.MIN_OBSTACLE_SIZE);
      const newObstacle: Obstacle = {
        x: 0,
        y: 0,
				size: size
      };
      setObstacles((prevObstacles) => [...prevObstacles, newObstacle]);
    };

    const getRandomInterval = () => {
      return Constants.MIN_GENERATE_INTERVAL + Math.random() * 
        (Constants.MAX_GENERATE_INTERVAL - Constants.MIN_GENERATE_INTERVAL);
    };

    const intervalId = setInterval(() => {
      if (!gameOver) {
        generateObstacle();
      }
    }, getRandomInterval());

    return () => clearInterval(intervalId);
  }, [setObstacles, gameOver]);
};

export default useGenerateObstacle;
