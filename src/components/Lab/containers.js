import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import _Lab from './Lab.jsx';
export const Lab = withRouter(connect(null, null)(_Lab));
