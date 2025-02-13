const getSortedKeys = (obj1, obj2) => {
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  /* eslint-disable */
	return [...allKeys].sort();
	/* eslint-enable */
};

const buildDiffTree = (obj1, obj2) => {
  const keys = getSortedKeys(obj1, obj2);

  return keys.map((key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (typeof value1 === 'object' && value1 !== null && typeof value2 === 'object' && value2 !== null) {
      return { key, type: 'nested', children: buildDiffTree(value1, value2) };
    }
    if (!(key in obj2)) {
      return { key, type: 'removed', value: value1 };
    }
    if (!(key in obj1)) {
      return { key, type: 'added', value: value2 };
    }
    if (value1 !== value2) {
      return {
        key, type: 'changed', oldValue: value1, newValue: value2,
      };
    }
    return { key, type: 'unchanged', value: value1 };
  });
};

export default buildDiffTree;
