import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import _Header from './Header.jsx';
export const Header = withRouter(connect(null, null)(_Header));
