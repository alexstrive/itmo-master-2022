function task(value) {
  if (value !== null && Object.getPrototypeOf(value) !== null) {
    let counter = 0;
    let currentObject = Object.getPrototypeOf(value);

    while (currentObject !== null) {
      currentObject = Object.getPrototypeOf(currentObject);
      counter++;
    }
    return counter;
  }
  return 'alexstrive';
}
