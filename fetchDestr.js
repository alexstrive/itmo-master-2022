fetch('https://kodaktor.ru/j/users ')
  .then((x) => x.json())
  .then(({ users: x }) => x)
  .then(({ 3: x }) => x)
  .then(({ login: x }) => x)
  .then((x) => console.log(x));
