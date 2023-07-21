const fs = require('fs');
const path = require('path');
const YAML = require("js-yaml");


module.exports = function generateDockerCompose(dirPath, arrayOfFiles) {

  //----------------- GET LIST OF SPECS ------------------------
  arrayOfFiles = arrayOfFiles || [];
  const files = fs.readdirSync(dirPath);

  files.forEach(function (file) {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = generateDockerCompose(filePath, arrayOfFiles);
    } else {
      if (
        filePath.endsWith('.cy.js') ||
        filePath.endsWith('.cy.ts')
      ) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  //------------------ CREATE DOCKER COMPOSE YAML -----------------------
  const specNames = arrayOfFiles;

  const services = specNames.map((specName, index) => ({
    [`e2e-${index + 1}`]: {
      image: "cyp-dock-mocha-report",
      command: `npx cypress run --spec ${specName}`,
      volumes: [
        "./cypress/videos:/cypress-docker/cypress/videos",
        "./cypress/reports:/cypress-docker/cypress/reports",
      ],
    },
  }));

  const dockerComposeYaml = {
    version: "3",
    services: Object.assign({}, ...services),
  };

  fs.writeFile(
    "docker-compose.yml",
    YAML.dump(dockerComposeYaml),
    (err) => {
      if (err) throw err;
      console.log("Docker Compose YAML file generated successfully!");
    }
  );

}

const filesArray = generateDockerCompose('cypress');
console.log(filesArray);
