/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    function maxDepth(tree){
        if(tree===null) return 0;
        return Math.max(maxDepth(tree.left),maxDepth(tree.right))+1;
    }
    return maxDepth(root);
};
