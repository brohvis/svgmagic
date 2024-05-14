#!/usr/bin/env node
const fs = require('fs-extra');  // fs-extra supports copying directories
const path = require('path');

const setup = async () => {
  const projectRoot = process.cwd();

  const inquirer = await import('inquirer');

  // Ask user for installation path and whether to copy SVGs
  const answers = await inquirer.default.prompt([
    {
      type: 'input',
      name: 'installationPath',
      message: 'Enter the installation path for the SVGM component:',
      default: path.join('src', 'components', 'svgm'),  // Default installation path
    },
    {
      type: 'confirm',
      name: 'copySVGs',
      message: 'Would you like to copy the sample SVGs to your project?',
      default: true,
    }
  ]);

  // Create the svgm directory under the specified or default location
  const svgmDirPath = path.join(projectRoot, answers.installationPath);
  fs.ensureDirSync(svgmDirPath);

  if (answers.copySVGs) {
    // Path to the sample SVGs in your package
    const sampleSvgPath = path.join(__dirname, '..', 'dist', 'svg');
    
    // Copy sample SVGs to the new svgm directory
    fs.copySync(sampleSvgPath, svgmDirPath);
    console.log(`Sample SVGs have been copied to: ${svgmDirPath}`);
  } else {
    console.log("Skipping SVG copy per your request.");
  }

  // Path to the template file
  const templatePath = path.join(__dirname, '..', 'src', 'templates', 'SVGM.template.tsx');
  const componentCode = fs.readFileSync(templatePath, 'utf8');

  const filePath = path.join(svgmDirPath, 'SVGM.tsx');
  fs.writeFileSync(filePath, componentCode);
  console.log(`SVGM component has been created at: ${filePath}`);
};

setup();
