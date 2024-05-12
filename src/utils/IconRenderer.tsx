import React from 'react';
import { ConfigType } from '../types/types'; // Adjust import path as necessary

interface RenderIconProps {
  kind: string;
  iconFiles: { [key: string]: React.ComponentType<any> };
  config: ConfigType;
  href?: string;
  size?: string;
  className?: string;
  setHrefs?: { [key: string]: string | false };
}

export const renderIcon = ({
  kind,
  iconFiles,
  config,
  href = '',
  className = '',
  setHrefs
}: RenderIconProps) => {
  const IconComponent = iconFiles[kind];
  if (!IconComponent) return null;

  const iconName = kind.charAt(0).toUpperCase() + kind.slice(1);
  const finalClassName = `fill-current ${className}`;
  const finalHref = (setHrefs && setHrefs[kind] === false) ? false :
                    (href || (setHrefs && setHrefs[kind]) || config.defaultHrefs[kind]);

  if (finalHref === false) return null; // Do not render if no link should be displayed

  return (
    <div key={kind} className={className}>
      {finalHref ? (
        <a target="_blank" rel="noopener noreferrer" href={finalHref} className={finalClassName}>
          <span className="sr-only">{iconName}</span>
          <IconComponent className={finalClassName} alt={iconName} />
        </a>
      ) : (
        <IconComponent className={finalClassName} alt={iconName} />
      )}
    </div>
  );
};
