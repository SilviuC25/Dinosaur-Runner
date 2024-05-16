import { useEffect } from 'react';
import { Obstacle } from '../datatypes/ObstacleInterface';
import * as Constants from '../constants/gameConstants';

const useCheckCollision = (
  dinosaurPosition: { x: number; y: number },
  obstacles: Obstacle[],
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>
) => {
	const gameContainerWidth = Constants.GAME_WIDTH_PERCENTAGE * window.innerWidth;

  useEffect(() => {
    const checkCollision = () => {
      obstacles.forEach(obstacle => {
        const obstacleLeft = obstacle.x;
        const obstacleRight = obstacle.x + obstacle.size;
        const obstacleTop = obstacle.y;
        const obstacleBottom = obstacle.y + obstacle.size;

        const dinoLeft = gameContainerWidth - dinosaurPosition.x - 
					Constants.MARGIN_LEFT;
        const dinoRight = gameContainerWidth - dinosaurPosition.x + 
					Constants.DINOSAUR_SIZE - Constants.MARGIN_LEFT;
        const dinoTop = dinosaurPosition.y;
        const dinoBottom = dinosaurPosition.y + Constants.DINOSAUR_SIZE;

        const isCollision = 
          dinoRight > obstacleLeft &&
          dinoLeft < obstacleRight &&
          dinoBottom > obstacleTop &&
          dinoTop < obstacleBottom;

        if (isCollision) {
          setGameOver(true);
        }
      });
    };

    const interval = setInterval(
			checkCollision, Constants.CHECK_COLLISION_INTERVAL);

    return () => clearInterval(interval);
  }, [dinosaurPosition, obstacles, setGameOver]);
};

export default useCheckCollision;
