import * as Constants from '../constants/gameConstants';
import * as Styles from '../styles/gameContainerStyles';
import { Obstacle } from '../datatypes/ObstacleInterface';

interface ObstaclesProps {
  obstacles: Obstacle[];
	className?: string;
}

function Obstacles({ obstacles }: ObstaclesProps) {
  return (
    <>
      {obstacles.map((obstacle, index) => (
        <img
          key={index}
          src={Constants.cactus}
          alt='Obstacle'
          style={{
            ...Styles.obstacleStyle,
						width: `${obstacle.size}px`,
						height: `${obstacle.size}px`,
            right: `${obstacle.x}px`,
            bottom: `${obstacle.y}px`
          }}
        />
      ))}
    </>
  );
}

export default Obstacles;