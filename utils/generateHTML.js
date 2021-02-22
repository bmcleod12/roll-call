const finalHTML = [];

function generateHTML(manager, engineers, interns) {
  finalHTML.push(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Roster</title>
      <script src="https://kit.fontawesome.com/faca15df7c.js" crossorigin="anonymous"></script>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
  </head>
  <body class="bg-blue-50 text-gray-100" style="font-family: 'Poppins', sans-serif;">
    <div class="flow-root bg-blue-900">
      <h1 class="text-4xl p-3"><a href="index.html">Team Roster </a><span class="fas fa-users"></span></h1>
    </div>
  <div class="container mx-auto p-3">
    <div class="grid grid-cols-3 gap-4">
      <div class="grid-cols-1 bg-blue-900 p-3 rounded divide-y divide-blue-400">
        <div>
          <h1 class="text-2xl">${manager.name}</h1>
          <h2 class="text-2xl mb-2">Manager <span class="fas fa-user-tie"></span></h2>
        </div>
        <div>
          <h3 class="mt-3">ID: ${manager.id}</h3>
          <h3>Email: <a class="underline" href="${manager.email}">${manager.email}</a></h3>
          <h3>Office Number: ${manager.officeNumber}</h3>
      </div>
    </div>`);  
  
  engineers.forEach(engineer => {
    var engineerHTML =
    `<div class="grid-cols-1 bg-pink-800 p-3 rounded divide-y divide-pink-400">
    <div>
      <h1 class="text-2xl">${engineer.name}</h1>
      <h2 class="text-2xl mb-2">Engineer <span class="fas fa-laptop-code"></span></h2>
    </div>
    <div>
      <h3 class="mt-3">ID: ${engineer.id}</h3>
      <h3>Email: <a class="underline" href="mailto:${engineer.email}">${engineer.email}</a></h3>
      <h3>GitHub: <a class="underline" href="https://github.com/${engineer.gitHub}" target="_blank" alt="GitHub link" class="text-light">${engineer.gitHub}</a></h3>
   </div>
  </div>`;
  finalHTML.push(engineerHTML);
  });

  interns.forEach(intern => {
    var internHTML =
      `<div class="grid-cols-1 bg-green-700 p-3 rounded divide-y divide-green-400">
      <div>
        <h1 class="text-2xl">${intern.name}</h1>
        <h2 class="text-2xl mb-2">Intern <span class="fas fa-university"></span></h2>
      </div>
      <div>
        <h3 class="mt-3">ID: ${intern.id}</h3>
        <h3>Email: <a class="underline" href="mailto:${intern.email}">${intern.email}</a></h3>
        <h3>School: ${intern.school}</h3>
    </div>
    </div>
  </div>
  </div>

  </body>
  </html>`;
  finalHTML.push(internHTML);
  });
  
  return (finalHTML.join(''))
};

module.exports = generateHTML;