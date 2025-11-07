const { leafSum, getLeafValues, formatLeafvalues } = require('./LeafSum');
const TNode = require('../TNode');

test('should correctly calculate leaf sum and print values', () => {
  const root = new TNode(9);
  root.left = new TNode(8);
  root.right = new TNode(12);
  root.left.left = new TNode(3);
  root.left.right = new TNode(7);
  root.right.left = new TNode(17);
  root.right.right = new TNode(23);
  root.left.left.right = new TNode(4);

  const leaves = getLeafValues(root);
  const sum = leafSum(root);

  console.log(`Leaf nodes are ${formatLeafvalues(leaves)}.`);
  console.log(`Sum = ${leaves.join(' + ')} = ${sum}`);

  expect(sum).toBe(51);
});
