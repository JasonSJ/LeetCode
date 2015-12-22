/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function recurse(node) {
        if(node === null) {
            return ;
        }
        var temp = node.left;
        node.left = node.right;
        node.right = temp;
        recurse(node.left);
        recurse(node.right);
    }
    recurse(root);
    return root;
};
