import React from 'react';
import PropTypes from 'prop-types';

import {images} from '../../Constants';

const MainView = ({children}) =>
    <div style={{background: `url(${images.background}) no-repeat`, backgroundSize: 'cover', display: 'flex', flexDirection:'column'}}>{children}</div>;

MainView.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export {
    MainView
};
