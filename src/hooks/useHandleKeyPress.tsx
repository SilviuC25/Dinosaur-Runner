import { useEffect } from 'react';
import * as Constants from '../constants/gameConstants';

const useHandleKeyPress = (
  gameOver: boolean,
  setDinosaurPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
) => {
  useEffect(() => {
    let isJumping = false;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (gameOver || isJumping) return;

      if (event.key === 'ArrowUp') {
        isJumping = true;

        const jump = () => {
          const jumpUpInterval = setInterval(() => {
            setDinosaurPosition(prevPosition => {
              const newY = Math.min(prevPosition.y + 
                Constants.POSITION_MODIFIER, Constants.JUMP_HEIGHT);
              if (newY === Constants.JUMP_HEIGHT) {
                clearInterval(jumpUpInterval);
                const fallDownInterval = setInterval(() => {
                  setDinosaurPosition(prevPosition => {
                    const newY = Math.max(prevPosition.y - 
                      Constants.POSITION_MODIFIER, 0);
                    if (newY === 0) {
                      clearInterval(fallDownInterval);
                      isJumping = false;
                    }
                    return { ...prevPosition, y: newY };
                  });
                }, Constants.MODIFY_POSITION_INTERVAL_DINO);
              }
              return { ...prevPosition, y: newY };
            });
          }, Constants.MODIFY_POSITION_INTERVAL_DINO);
        };

        jump();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameOver, setDinosaurPosition]);
};

export default useHandleKeyPress;
