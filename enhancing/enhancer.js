module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  const enhancedItem = { ...item };

  if (enhancedItem.enhancement === 20) {
    return enhancedItem;
  } else {
    enhancedItem.enhancement += 1;
    return enhancedItem;
  }
}

function fail(item) {
  const failedItem = { ...item };

  // If the item's enhancement is less than 15, the durability of the item is decreased by 5.
  // If the item's enhancement level is greater than 16, the enhancement level decreases by 1.
  // If the item's enhancement is 15 or more, the durability of the item is decreased by 10.

  if (failedItem.enhancement >= 15) {
    if (failedItem.enhancement > 16) {
      failedItem.durability -= 10;
      failedItem.enhancement -= 1;
    } else {
      failedItem.durability -= 10;
    }
  } else if (failedItem.enhancement < 15) {
    failedItem.durability -= 5;
  }

  return failedItem;
}

function repair(item) {
  const repairedItem = { ...item };
  repairedItem.durability = 100;
  return repairedItem;
}

function get(item) {
  return { ...item };
}
