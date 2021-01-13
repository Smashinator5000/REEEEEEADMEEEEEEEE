const inquirer = require("inquirer")
const fs = require("fs")

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      message: 'How would you describe your project?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What does the user need to know about its usage?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What is it licensed under?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who were the contributers?',
      name: 'Contributing',
    },
    {
      type: 'input',
      message: 'How did you run the tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Where do I direct questions?',
      name: 'questions',
    },

  ]).then((response) => {
      console.table(response)
      var template = `# The title of my Readme is ${response.name}\n ## Eating tacos is best\n \n ### Instructions for installation \n ${response.installation} \n #### usage \n ${response.usage} \n ##### license \n ${response.license} \n ###### contributing \n ${response.contributing} \n ### Tests \n ${response.tests} \n ### Questions \n ${response.questions} \n ## Table of Contents \n \n 1. Title \n 2. Installation`

      fs.writeFile("readme.md", template, (err) => {
        if(err) console.error(err)
      })
  })

  //title, table of content, Installation, Usage, License, Contributing, Tests, Questions
