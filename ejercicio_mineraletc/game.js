const inquirer = require("inquirer");

inquirer.prompt(
    [
        {
            message: "¿Cómo te llamas, amig@?",
            name: "userName",
            type: "input"
        }, 
        {
            message: "¿Mineral, vegetal o animal?",
            type: "checkbox",
            name: "selectedType",
            choices: [
              { name: "Mineral"},
              { name: "Vegetal" },
              { name: "Animal" }
            ]
          }
  ])
  
  .then((answers) => {
        if  ("celia".userName) {
        console.log("pregunta1")
    }
  });
