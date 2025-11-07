const  TNode  = require('../TNode');
const BinaryTree = require('../BinaryTree');

function leafSum(node) {

    //check for null node 
    if(!node) {
        return 0;
    }

    if(!node.left&& !node.right) {
        return node.value;
    }

    //recurion operations on left & right subtrees
    const leftSum = leafSum(node.left);
    const rightSum = leafSum(node.right);

    return leftSum + rightSum;
}

//function to show the rusult 

function getLeafValues(node, leaves=[]) {

    if(!node) return leaves;

    if(!node.left && !node.right){
        leaves.push(node.value);

    }else{
        getLeafValues (node.left, leaves);
        getLeafValues (node.right, leaves);
    }
    return leaves;
}

//formating the output as required
function formatLeafvalues(arr){
    
    if (arr.length === 0) return '';
    if(arr.length === 1) return '${arr[0]}';
    if (arr.lenth === 2) return '${arr[0]} and ${arr[1]}';
    if(arr.length > 2){
        const allExceptLast = arr.slice(0, -1) .join(',');
        const last = arr[arr.length -1];
        return '${allExceptLast}, and ${last}';
    }
}

module.exports = { leafSum, getLeafValues, formatLeafvalues };