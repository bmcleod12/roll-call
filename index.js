// // function to write README file
// function writeToFile(fileName, readMeContent) {
//     fs.writeFile('./output/README.md', readMeContent, (err) =>
//     err ? console.log(err) : console.log('Successfully created README.md!')
//   );
// }

// // initializes app; when it's initialized, inquirer.prompt iterates through each question in the questions array; .then grabs the readMeContent created in generateMarkdown.js, and passes that content to the writeToFile function
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => { 
//             const readMeContent = generateMarkdown(answers);
//             writeToFile('./output/README.md', readMeContent);
//         })
// };

// // Function call to initialize app
// init();