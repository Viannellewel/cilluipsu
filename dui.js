function hasOverlap(items, sep) {
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      if (items[i].toString().includes(sep, 0, items[j].toString())) {
        return true;
      }
    }
  }
  return false;
}
