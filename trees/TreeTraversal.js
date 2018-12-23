import Queue from "../arrayBasedDS/Queue";

/**
 * There are two ways of traversal 
 * 1. BFS - Breadth for Search - Level order traversal
 * 2. DFS - Depth for Search - 
 *      a. Inorder
 *      b. Preorder
 *      c. PostOrder
 * 
 */
export default class TreeTraversal {

    /**
      * Inorder traversal of the binary Tree
      * Logic: LeftChild-Root-RightChild
      */
    inorder(root) {
        let temp = root;

        if (!temp)
            return;
        this.inorder(temp.left);
        console.log(temp.value);
        this.inorder(temp.right);
    }

    /**
      * Inorder traversal of the binary Tree
      * Logic: Root-LeftChild-RightChild
      */
    preOrder(root) {
        let temp = root;
        if (!temp)
            return;
        console.log(temp.value);
        this.inorder(temp.left);
        this.inorder(temp.right);

    }

    /**
      * Inorder traversal of the binary Tree
      * Logic: LeftChild-RightChild-Root
      */
    postOrder(root) {
        let temp = root;
        if (!temp)
            return;
        this.inorder(temp.left);
        this.inorder(temp.right);
        console.log(temp.value);
    }

    /**
     * Breadth for Search - Level order traversal
     */
    levelOrderTraversal(root) {
        let q = new Queue(), temp = null, height = 1;
        q.add(root);
        let arr = [];
        while (!q.isEmpty()) {
            temp = q.peek();
            while (!q.isEmpty()) {
                if (temp.left)
                    q.add(temp.left);
                if (temp.right)
                    q.add(temp.right);

                value = q.remove();

                if (arr[height]) {
                    arr[height].push(temp.value);
                } else {
                    arr[height] = [temp.value];
                }
            }

        }

    }
}
