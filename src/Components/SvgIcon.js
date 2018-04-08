import React from 'react';
import iconPaths from '../assets/images/svg.json';

function getPath(iconName) {
  const icon = iconPaths.icons.find(icon => ~icon.tags.indexOf(iconName));

  if (icon) {
    return icon.paths.join(' ');
  } else {
    console.warn(`icon ${iconName} does not exist.`);
    return '';
  }
}

const style = { verticalAlign: 'middle' };

const Icon = ({
  svgIcon = '',
  className = '',
  width = 16,
  height = 16,
  fill = '#7f8fa4',
  viewBox = '0 0 1024 1024',
  onClick
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fill}
    style={style}
    onClick={onClick}
    preserveAspectRatio="xMinYMin meet"
  >
    <path d={getPath(svgIcon)} />
  </svg>
);

export default Icon;
