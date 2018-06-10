import React  from 'react';
import { images } from '../../Constants';

const backgroundStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: `url(${images.background}) no-repeat`,
    backgroundSize: 'cover',
};

const backgroundOverflowStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#2E253B',
    opacity: '0.9',
};

export default () =>
    <div>
        <div style={{filter: 'blur(3px)', ...backgroundStyle}}/>
        <div style={backgroundOverflowStyle}/>
    </div>;
