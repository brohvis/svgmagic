
# svgMagic

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/brohvis/svgmagic/publish.yml?style=for-the-badge)
![GitHub Release](https://img.shields.io/github/v/release/brohvis/svgmagic?style=for-the-badge&logo=GitHub&label=LATEST&color=success)
![NPM Version](https://img.shields.io/npm/v/svgmagic?style=for-the-badge&logo=npm&logoColor=white&color=success)
![NPM Downloads](https://img.shields.io/npm/dw/svgmagic?style=for-the-badge)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/svgmagic?style=for-the-badge)


svgMagic, SVGMAGIC, svgm, or SVGM is a dynamic `svg` management package designed for Next.js applications. It allows developers and designers to easily load and manage `svg`'s, making them instantly available in the development environment without manual imports or pre-specifications.

Visit our website for more in depth documentation and example animations at https://svgmagic.dev

## Features

- **Dynamic Loading:** Automatically load `.svg` files from a specified directory.
- **Easy Integration:** No need to predefine or manually import `svg`'s.
- **TailwindCSS Compatibility:** Style `svg`'s using TailwindCSS classes.
- **Optimized for Next.js:** Seamlessly integrate with Next.js applications.

## Installation

Use your preffered package manager to install the package.
https://github.com/brohvis/svgmagic
https://www.npmjs.com/package/svgmagic
https://github.com/brohvis/svgmagic/pkgs/npm/svgmagic

```bash
pnpm i svgmagic
```

```bash
npm i svgmagic
```

```bash
yarn add svgmagic
```

### Ensure SVGR is Installed

SVGM uses SVGR to transform `svg` into React components. SVGR is a peer dependency and should be installed automatically. If not, you can install it manually:

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

To use SVGM in your Next.js project, follow these next steps:

1. **Run the Install Script:**
   SVGM includes an install script to scaffold the necessary files and directories. Run the following command after installing the package:

   ```bash
   svgm-setup
   ```

   This script will:
   - Create a default or configurable `svgm` directory under `src`.
   - Optionally copy sample `.svg`'s into this directory.
   - Create the `SVGM.tsx` component file in this directory.

   **Note:** This setup is required because `require.context` is a webpack feature not available to npm packages. Once locally scaffolded, it works like a charm!

2. **Import and Use SVGM Component:**

   ```jsx
   // Example usage in a Next.js page
   import SVGM from '../components/svgm/SVGM';

   const ExamplePage = () => (
     <div>
       <SVGM kind="apple" className="h-8 w-8 text-black" />
     </div>
   );

   export default ExamplePage;
   ```

### Changing the Default Path and Installing Sample svg's

During setup, you can choose whether to install sample `.svg`'s and change the default path for the `svgm` directory. The sample `.svg`'s are sourced from company websites and are up-to-date as of May 15, 2024.

### Adding SVGM to MDX

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

### Adding New svg's

1. **Naming Convention:**
   - Place your `.svg` files in the `/svgm` directory.
   - Use concise and descriptive filenames. The name of the `.svg` file will be used to call the `svg` code in your components.

2. **Replace Fill Colors:**
   - Open the `.svg` file in an editor.
   - Replace desired fill colors with `"currentColor"` using camel case.

   Example:
   ```svg
   <!-- Original -->
   <svg fill="#000000" ...>
   
   <!-- Updated -->
   <svg fill="currentColor" ...>
   ```

   This allows you to style the `.svg`'s using CSS classes.

## Contributing

PR's and issues welcome!

## License

SVGM is licensed under the MIT License.

## Visit Us

For more information, and a detailed demonstration and documentation using Next.js, visit [SVG Magic](https://svgmagic.dev).

---

### Release Notes for v1.1

**Title:** SVGM v1.1 - Latest Release

**Tags:** svg, svgm, tailwindsvg, nextsvg, svgmagic

**Release Notes:**
- README.md enhancements

Thank you for using SVGM! We look forward to your feedback and contributions.
https://svgmagic.dev
