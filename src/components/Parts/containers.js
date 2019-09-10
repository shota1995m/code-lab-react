import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import _TitleHeader from './TitleHeader.jsx';
export const TitleHeader = withRouter(connect(null, null)(_TitleHeader));
