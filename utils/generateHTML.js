function generateHTML(answers) {
return `
<!DOCTYPE html>
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

<body class="bg-blue-50 text-gray-100" style="font-family: 'Poppins', sans-serif;">
  <div class="flow-root bg-blue-900">
    <h1 class="text-4xl p-3"><a href="index.html">Team Roster </a><span class="fas fa-users"></span></h1>
  </div>

  <div class="container mx-auto p-3">
    <div class="grid grid-cols-3 gap-4">
    <h1>${answers.memberName}</h1>
    <h2>${answers.id}<h2>
    <h2>${answers.email}<h2>
      <div class="grid-cols-1 bg-blue-900 p-3 rounded divide-y divide-blue-400">
        <div>
          <h1 class="text-2xl">Brenna McLeod</h1>
          <h2 class="text-2xl mb-2">Manager <span class="fas fa-user-tie"></span></h2>
        </div>
        <div>
          <h3 class="mt-3">ID: 132</h3>
          <h3>Email: <a class="underline" href="mailto:brenna.mcleod94@gmail.com">brenna.mcleod94@gmail.com</a></h3>
          <h3>Office Number: 990</h3>
       </div>
      </div>
      <div class="grid-cols-1 bg-pink-800 p-3 rounded divide-y divide-pink-400">
        <div>
          <h1 class="text-2xl">Brenna McLeod</h1>
          <h2 class="text-2xl mb-2">Engineer <span class="fas fa-laptop-code"></span></h2>
        </div>
        <div>
          <h3 class="mt-3">ID: 132</h3>
          <h3>Email: <a class="underline" href="mailto:brenna.mcleod94@gmail.com">brenna.mcleod94@gmail.com</a></h3>
          <h3>GitHub: <a class="underline" href="https://github.com/bmcleod12" target="_blank" alt="GitHub link" class="text-light">bmcleod12</a></h3>
       </div>
      </div>
      <div class="grid-cols-1 bg-green-700 p-3 rounded divide-y divide-green-400">
        <div>
          <h1 class="text-2xl">Brenna McLeod</h1>
          <h2 class="text-2xl mb-2">Intern <span class="fas fa-university"></span></h2>
        </div>
        <div>
          <h3 class="mt-3">ID: 132</h3>
          <h3>Email: <a class="underline" href="mailto:brenna.mcleod94@gmail.com">brenna.mcleod94@gmail.com</a></h3>
          <h3>School: NWMSU</h3>
       </div>
      </div>
    </div>
  </div>

</body>
</html>
`
}

module.exports = generateHTML;