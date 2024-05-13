#!/usr/bin/env node
const fs = require('fs-extra');  // fs-extra supports copying directories
const path = require('path');
const inquirer = require('inquirer');

const setup = () => {
  const projectRoot = process.cwd();

  // Create the svgm directory under src or any specified location
  const svgmDirPath = path.join(projectRoot, 'src', 'components', 'svgm');
  fs.ensureDirSync(svgmDirPath);  // Makes sure the directory exists

  // Path to the sample SVGs in your package
  const sampleSvgPath = path.join(__dirname, '..', 'dist', 'svg');
  
  // Copy sample SVGs to the new svgm directory
  fs.copySync(sampleSvgPath, svgmDirPath);
  console.log(`Sample SVGs have been copied to: ${svgmDirPath}`);

  // Path to the template file
  const templatePath = path.join(__dirname, '..', 'src', 'templates', 'SVGM.template.tsx');
  const componentCode = fs.readFileSync(templatePath, 'utf8');

  const filePath = path.join(svgmDirPath, 'SVGM.tsx');

  fs.writeFileSync(filePath, componentCode);
  console.log(`SVGM component has been created at: ${filePath}`);
};

setup();
