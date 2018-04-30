import { connect } from 'react-redux';
import ChessBoard from '../ChessBoard';

import { getLocationOfPieces, movePiece } from '../../ducks/board';

const mapStateToProps = state => ({
  pieces: getLocationOfPieces(state),
});

const mapDispatchToProps = dispatch => ({
  movePiece: (player, pieceId, square) => {
    dispatch(movePiece({
      player,
      pieceId,
      square,
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChessBoard);
