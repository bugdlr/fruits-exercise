function choice (items) {
  let picked = items[Math.floor(Math.random() * items.length)];
  return picked;
}

function remove(items, item) {
  return items = items.filter(i => (i !== item) ? i : undefined);
}

export {choice, remove};
