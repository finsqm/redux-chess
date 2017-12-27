import { connect } from 'react-redux';
import ChessBoard from '../ChessBoard';

import { getPieceLocation } from '../../ducks/board';

const mapStateToProps = state => ({
  pieces: getPieceLocation(state),
});

export default connect(mapStateToProps)(ChessBoard);
