import React, { Suspense } from 'react';

export interface SVGMProps {
  kind: string;
  className?: string;
}

const importAll = (requireContext: { keys: () => string[]; (path: string): any; }) => {
  return requireContext.keys().reduce<{ [key: string]: React.ComponentType<any> }>((acc, next) => {
    const key = next.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '');
    acc[key] = requireContext(next).default;
    return acc;
  }, {});
};

const iconFiles = importAll(require.context('/', false, /\.svg$/));

const SVGM: React.FC<SVGMProps> = ({ kind, className = '' }) => {
  const IconComponent = iconFiles[kind];
  
  if (!IconComponent) return null;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={className}>
        <IconComponent className={`fill-current ${className}`} alt={`${kind} icon`} />
      </div>
    </Suspense>
  );
};

export default SVGM;
