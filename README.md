
# SVGM

SVGM is a dynamic SVG management package designed for Next.js applications. It allows developers and designers to easily load and manage SVGs, making them instantly available in the development environment without manual imports or pre-specifications.

## Features

- **Dynamic Loading:** Automatically load SVGs from a specified directory.
- **Easy Integration:** No need to predefine or manually import SVGs.
- **TailwindCSS Compatibility:** Style SVGs using TailwindCSS classes.
- **Optimized for Next.js:** Seamlessly integrate with Next.js applications.

## Installation

```bash
npm install svgm
```

### Ensure SVGR is Installed

SVGM uses SVGR to transform SVGs into React components. SVGR is a peer dependency and should be installed automatically. If not, you can install it manually:

```bash
npm install @svgr/webpack
```

### Configure SVGR in Next.js

Add the following configuration to your `next.config.js` to enable SVGR:

```javascript
// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
```

## Usage

To use SVGM in your Next.js project, follow these steps:

1. **Run the Install Script:**
   SVGM includes an install script to scaffold the necessary files and directories. Run the following command after installing the package:

   ```bash
   svgm-setup
   ```

   This script will:
   - Create an `svgm` directory under `src`.
   - Copy sample SVGs into this directory (optional).
   - Create the `SVGM.tsx` component file.

   **Note:** This setup is required because `require.context` is a webpack feature not available to npm packages. Once locally scaffolded, it works like a charm!

2. **Import and Use SVGM Component:**

   ```jsx
   // src/components/SVGM.tsx
   import React from 'react';
   import { RenderIcon } from 'svgm';

   const SVGM = ({ kind, className }) => (
     <RenderIcon kind={kind} className={className} />
   );

   export default SVGM;
   ```

3. **Rendering SVGs:**

   ```jsx
   // Example usage in a Next.js page
   import SVGM from '../components/SVGM';

   const ExamplePage = () => (
     <div>
       <SVGM kind="apple" className="h-8 w-8 text-black" />
     </div>
   );

   export default ExamplePage;
   ```

### Changing the Default Path and Installing Sample SVGs

During setup, you can choose whether to install sample SVGs and change the default path for the `svgm` directory. The sample SVGs are sourced from company websites and are up-to-date as of May 15, 2024.

To change the default path or skip installing sample SVGs, run:

```bash
npx svgm-setup --path=custom/path --no-samples
```

Replace `custom/path` with your desired directory path.

### Adding SVGM to MDX Components

To use SVGM with MDX components in a setup like Contentlayer, update your `mdx-components.js` file:

```javascript
// src/components/mdx-components.js
import SVGM from './SVGM';

const components = {
  SVGM,
  // other MDX components...
};

export default components;
```

### Adding New SVGs

1. **Naming Convention:**
   - Place your SVG files in the `src/svgm` directory.
   - Use concise and descriptive filenames. The name of the SVG file will be used to call the SVG in your components.

2. **Replace Fill Colors:**
   - Open the SVG file in an editor.
   - Replace desired fill colors with `"currentColor"` using camel case.

   Example:
   ```svg
   <!-- Original -->
   <svg fill="#000000" ...>
   
   <!-- Updated -->
   <svg fill="currentColor" ...>
   ```

   This allows you to style the SVGs using CSS classes.

## Contributing

We welcome contributions to improve SVGM. Please follow the guidelines outlined in the CONTRIBUTING.md file.

## License

SVGM is licensed under the MIT License.

## Visit Us

For more information, and a detailed demonstration and documentation using Next.js, visit [SVG Magic](https://svgmagic.dev).

---

### Release Notes for v1.0.0

**Title:** SVGM v1.0.0 - Initial Release

**Tags:** svg, svgm, tailwindsvg, nextsvg, svgmagic

**Release Notes:**
- Initial release of SVGM.
- Added dynamic loading and management of SVGs.
- Integration with TailwindCSS for easy styling.
- Optimized for Next.js applications.

Thank you for using SVGM! We look forward to your feedback and contributions.
https://svgmagic.dev
