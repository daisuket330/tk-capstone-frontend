class ArtistNode {

    /**
     * Creates a new ArtistNode and sets the item, and initializes it's empty children.
     * @param {*} item the item to initialize the node with.
     */
    constructor(parent, item) {
        this.parent = parent
        this.item = item
    }

    /**
     * Return the item contained within the node.
     */
    item() {
        return this.item
    }

    /**
     * Returns the node at the given index, if index is valid.
     * @param {*} index The index of the node to be obtained.
     */
    getNodeChild(index) {
        if (index > this.nodes.length - 1) {
            // throw error
        } else {
            return this.nodes[index]
        }
    }

    /**
     * Sets the item of the current node.
     * @param {*} newItem The new item of the current node.
     */
    setItem(newItem) {
        this.item = newItem
    }

    /**
     * Adds a new child of the current node, by adding to the children array.
     * @param {*} newNode The new node to be added to the children.
     */
    addNodeChild(newNode) {
        this.nodes.push(newNode)
    }

    /**
     * Sets the child node at the given index to be the new node.
     * @param {*} index the index of the node to be set.
     * @param {*} newNode the new node to set the indexed node to.
     */
    setNodeChild(index, newNode) {
        if (index > this.nodes.length - 1) {
            // throw error
        } else{
            this.nodes[index] = newNode
        }
    }
    
    getChildren() {
        return this.nodes;
    }

 }

 export default ArtistNode