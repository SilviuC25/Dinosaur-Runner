import * as Constants from '../constants/gameConstants';
import * as Styles from '../styles/gameContainerStyles';

function Dinosaur({ gameOver, dinosaurPositionY }: 
  { gameOver: boolean, dinosaurPositionY: number }) {
  return (
    <>
      {!gameOver && (
        <img
          src={Constants.dinosaur}
          alt='Dino'
          style={{
            ...Styles.dinosaurStyle,
            bottom: Constants.DINOSAUR_INITIAL_POSITION + dinosaurPositionY
          }}
          className='position-absolute translate-middle'
        />
      )}
    </>
  );
}

export default Dinosaur;