const getIndent = (depth) => ' '.repeat(depth * 4 - 2);
const stringify = (value, depth) => {
  if (typeof value !== 'object' || value === null) {
    return String(value);
  }
  const indent = getIndent(depth + 1);
  const entries = Object.entries(value)
    .map(([key, val]) => `${indent}  ${key}: ${stringify(val, depth + 1)}`)
    .join('\n');
  return `{\n${entries}\n${getIndent(depth)}  }`;
};

const formatStylish = (diffTree, depth = 1) => {
  const indent = getIndent(depth);
  const result = diffTree.map((node) => {
    const { key, type } = node;
    switch (type) {
      case 'nested':
        return `${indent}  ${key}: {\n${formatStylish(node.children, depth + 1)}\n${indent}  }`;
      case 'added':
        return `${indent}+ ${key}: ${stringify(node.value, depth)}`;
      case 'removed':
        return `${indent}- ${key}: ${stringify(node.value, depth)}`;
      case 'changed':
        return `${indent}- ${key}: ${stringify(node.oldValue, depth)}\n${indent}+ ${key}: ${stringify(node.newValue, depth)}`;
      case 'unchanged':
        return `${indent}  ${key}: ${stringify(node.value, depth)}`;
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return result.join('\n');
};

export default formatStylish;
