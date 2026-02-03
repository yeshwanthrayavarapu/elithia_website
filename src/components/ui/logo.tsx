import React from 'react';

const Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (
        <img
            src="/image.svg"
            alt="Elithia Logo"
            {...props}
            style={{ maxHeight: '48px', width: 'auto', ...props.style }}
        />
    );
};

export default Logo;
