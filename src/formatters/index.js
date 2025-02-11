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

const formatValue = (value) => {
  if (typeof value === 'object' && value !== null) return '[complex value]';
  return typeof value === 'string' ? `'${value}'` : value;
};

// eslint-disable-next-line arrow-body-style
const formatPlain = (tree, currentPath = '') => {
  return tree
    .map((node) => {
      const fullPath = currentPath ? `${currentPath}.${node.key}` : node.key;

      switch (node.type) {
        case 'nested':
          return formatPlain(node.children, fullPath);
        case 'added':
          return `Property '${fullPath}' was added with value: ${formatValue(node.value)}`;
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Unknown type: ${node.type}`);
      }
    })
    .filter(Boolean)
    .join('\n');
};

export { formatStylish, formatPlain };
