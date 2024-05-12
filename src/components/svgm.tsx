import React from 'react';
import config from '../config'; // Correct path to config
import { ConfigType, SVGMProps } from '../types/types'; // Correct path to types
import { importAll } from '../utils/svgUtils'; // Correct path to utilities
import { renderIcon } from '../utils/IconRenderer'; // Correct path to utilities

const localConfig: ConfigType = config;
const iconFiles = importAll(require.context('../svg/', false, /\.svg$/)); // Assuming SVG files are under src/svg/

// Assuming the renderIcon function signature expects an object
const SVGM: React.FC<SVGMProps> = ({ kind, setName, href = '', size = '', className = '' }) => {
  if (setName) {
    const set = localConfig.iconSets[setName];
    const setHrefs = localConfig.setHrefs[setName];

    if (!set) return null;

    return (
      <div>
        {set.map((iconKind: string) => renderIcon({
          kind: iconKind, 
          iconFiles, 
          config: localConfig, 
          href, 
          size, 
          className, 
          setHrefs
        }))}
      </div>
    );
  }

  // Also adjust the single use case outside of the loop
  return renderIcon({
    kind, 
    iconFiles, 
    config: localConfig, 
    href, 
    size, 
    className
  });
};

export default SVGM;
