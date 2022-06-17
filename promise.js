async function task(x) {
  const name = await x.name;
  return Promise.resolve(`${name}alexstrive`);
}
