import { useState } from 'react';
import * as Constants from '../constants/gameConstants';
import * as Styles from '../styles/gameContainerStyles';
import Dinosaur from './Dinosaur';
import Obstacles from './Obstacles';
import useGenerateObstacle from '../hooks/useGenerateObstacle';
import useMoveObstacles from '../hooks/useMoveObstacles';
import useHandleKeyPress from '../hooks/useHandleKeyPress';
import useIncreaseSpeed from '../hooks/useIncreaseSpeed';
import useCheckCollision from '../hooks/useCheckCollision';
import useScore from '../hooks/useScore';
import { Obstacle } from '../datatypes/ObstacleInterface';

function GameContainer() {
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [obstacleSpeed, setObstacleSpeed] = useState(
    Constants.INITIAL_OBSTACLE_SPEED
  );
  const [gameOver, setGameOver] = useState(false);
  const [score, resetScore] = useScore(gameOver);
  const [dinosaurPosition, setDinosaurPosition] = useState({ x: 0, y: 0 });

  useGenerateObstacle(setObstacles, gameOver);
  useIncreaseSpeed(setObstacleSpeed, gameOver);
  useHandleKeyPress(gameOver, setDinosaurPosition);
  useMoveObstacles(obstacles, setObstacles, obstacleSpeed, gameOver);
  useCheckCollision(dinosaurPosition, obstacles, setGameOver);

  const resetGame = () => {
    resetScore();
    setObstacles([]);
    setObstacleSpeed(Constants.INITIAL_OBSTACLE_SPEED);
    setDinosaurPosition({ x: 0, y: 0 });
    setGameOver(false);
  };

  return (
      <div 
        className='bg-light px-5 card d-flex' 
        style={Styles.gameContainerStyle}
      >
        <h5 className='text-end text-primary py-2'>
          {' '}
          Score: {score}{' '}
        </h5>
        <Obstacles obstacles={obstacles} />
        {gameOver && (
          <div
            className='text-center position-absolute text-dark'
            style={{
              ...Styles.gameOverStyle
            }}
          >
            Game Over! Score: {score}
            <button onClick={resetGame} className='btn btn-primary mx-2'>
              Restart
            </button>
          </div>
        )}
        <Dinosaur gameOver={gameOver} dinosaurPositionY={dinosaurPosition.y} />
      </div>
  );
}
  
  export default GameContainer;