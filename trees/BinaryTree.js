import TreeNode from './TreeNode';
import Queue from '../arrayBasedDS/Queue';

/**
 * Binary tree is a data structure with maximum of two children each tree node.
 * 
 * Properties of Binary Tree:
 *  1. Max Nodes at level l = 2^l - 1
 *  2. Max node at height h = 2^h - 1 where h starts from 1 else 2^h in case h starts from 0
 *  3. 
 */
class BinaryTree{
    constructor(rootValue){
        this._rootNode = new TreeNode(rootValue);
    }

    get root(){
        return this._rootNode;
    }
    /**
     * Insert a value in binary tree
     * Logic: GO to the left most or right most node and store the node into the queue
     * Why Queue to keep in the FIFO order of the nodes
     * @param {Object} value value of any type
     */
    insert(value){
        let root = this.root, temp = root;
        const q = new Queue();
        q.add(root);
        while(root){
            root = q.remove();
            if(root.left == null){
                root.left = new TreeNode(value);
                break;
            }else{
                q.add(root.left);
            }
            if(root.right == null){
                root.right = new TreeNode(value);
                break;
            }else{
                q.add(root.right);
            }
        }
    }

    /**
     * Deletes a particular value from the binary tree
     * Logic: Find the right most deepest element and then replace the to be deleted with it 
     * then delete the right most deepest node
     * @param {*} value Any type 
     */
    delete(value){
        let temp = null, deletedNode = null, q = new Queue();
        q.add(this.root);
        //Finding the deepest right node and to be deleted node
        //Logic: The last temp would be the deepest right element and the 
        //parent of the element would be the previous temp
        while(!q.isEmpty()){
            temp = q.remove();
            if(temp && temp.value == value){
                deletedNode = temp;
            }
            if(temp.left){
                q.add(temp.left);
            }
            if(temp.right){
                q.add(temp.right);
            }
            
        }
        let x = temp.value;
        this.deleteDeepest(this.root, temp);
        deletedNode.value = x;
    }

    /**
     * Deletes the node of the tree  
     * @param {TreeNode} rootNode Root of the tree
     * @param {TreeNode} deleteNode Deepest node to be deleted 
     */
    deleteDeepest(rootNode, deleteNode){
        const q = new Queue();
        let temp = null;
        q.add(rootNode);
        while(!q.isEmpty()){
            temp = q.remove();
            if(temp.right === deleteNode){
                temp.right = null;
                return;
            }else{
                if(temp.right)
                    q.add(temp.right);
            }

            if(temp.left === temp){
                temp.left = null;
                return;
            }else{
                if(temp.left)
                    q.add(temp.left);
            }
        }
    }

    print(){
        let q = new Queue(), temp;
        q.add(this.root);
        while(!q.isEmpty()){
            temp = q.remove();
            console.log(`           ${temp.value}          `);
            console.log(`          /              \\        `);
            console.log(`    ${temp.left ? temp.left.value : null} ${temp.right ? temp.right.value : null} `);
            if(temp.left){
                q.add(temp.left);
            }
            if(temp.right)
                q.add(temp.right);
        }
    }

    height(root){
        if(!root){
            return 0;
        }
        let lheight = height(root.left);
        let rheight = height(root.right);
        if(lheight > rheight){
            return lheight + 1;
        }else{
            return rheight + 1;
        }
    }

    nodeHeight(root, value){
        if(!root || value == root.value){
            return 0;
        }
        let lheight = this.nodeHeight(root.left, value);
        let rheight = this.nodeHeight(root.right, value);
        if(lheight > rheight){
            return lheight + 1;
        }else{
            return rheight + 1;
        }
    }
}

export default BinaryTree;
