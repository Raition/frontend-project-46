const diff = (obj1, obj2) => {
  const processedKeys = [];
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj1)) {
    if (Object.hasOwn(obj2, key) && obj2[key] === value) {
      console.log(`     ${key}: ${value}`);
      result.push('=');
      processedKeys.push(key);
    } else if (Object.hasOwn(obj2, key) && obj2[key] !== value) {
      console.log(`  -  ${key}: ${value}`);
      console.log(`  +  ${key}: ${obj2[key]}`);
      result.push('-', '+');
      processedKeys.push(key);
    } else {
      console.log(`  -  ${key}: ${value}`);
      result.push('-');
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj2)) {
    if (!processedKeys.includes(key)) {
      console.log(`  +  ${key}: ${value}`);
      result.push('+');
    }
  }
  return result.join('');
};

export default diff;
