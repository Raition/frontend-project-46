const diff = (obj1, obj2) => {
  const cash = [];
  const res = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj1)) {
    if (Object.hasOwn(obj2, key) && obj2[key] === value) {
      console.log(`     ${key}: ${value}`);
      res.push('=');
      cash.push(key);
    } else if (Object.hasOwn(obj2, key) && obj2[key] !== value) {
      console.log(`  -  ${key}: ${value}`);
      console.log(`  +  ${key}: ${obj2[key]}`);
      res.push('-', '+');
      cash.push(key);
    } else {
      console.log(`  -  ${key}: ${value}`);
      res.push('-');
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj2)) {
    if (!cash.includes(key)) {
      console.log(`  +  ${key}: ${value}`);
      res.push('+');
    }
  }
  return res.join('');
};

export default diff;
