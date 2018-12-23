import BinaryTree from '../trees/BinaryTree';

/**
 * This function simulates the binary Tree with the following data
 * TreeStructure should be like the following:
 *              10
 *           /      \
 *         11        9
 *       /    \    /    \
 *      7     12   15     8
 * 
 * Traversal of the Tree would be 7 11 12 10 15 9 8
 */
function BinaryTreeSimulator(){
    const tree = new BinaryTree(10);
    tree.insert(11);
    tree.insert(9);
    tree.insert(7);
    tree.insert(12);
    tree.insert(15);
    tree.insert(8);
    //tree.inorder(tree.root);
    //tree.print();

    console.log(tree.nodeHeight(tree.root, 11));
    tree.print();
    //tree.delete(34);
    tree.delete(12);
    tree.print();
    //console.log(tree);
}

export default BinaryTreeSimulator;