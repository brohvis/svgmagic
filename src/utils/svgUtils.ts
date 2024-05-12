import React from 'react';

// Utility to dynamically import all SVGs and convert them to React components
export const importAll = (requireContext: { keys: () => string[]; (path: string): any; }) => {
    return requireContext.keys().reduce<{ [key: string]: React.ComponentType<any> }>((acc, next) => {
      const key = next.replace(/^.*[\\/]/, '').replace(/\.\w+$/, '');
      acc[key] = requireContext(next).default;
      return acc;
    }, {});
};
