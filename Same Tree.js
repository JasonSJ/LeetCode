/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    return isSame(p,q);
};

function isSame(p,q) {
    if(!p && !q) {
        return true;
    } else if(!q || !p) {
        return false;
    }  
    
    if(p.val === q.val) {
         return isSame(p.left,q.left) && isSame(p.right,q.right);
    } else {
        return false;
    }
    
   
}
