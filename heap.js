

//Heap is a complete Binary data structre  which contain parent node is either min(min heap) or max(max heap) to there child node. Hence there are two type of head
// min heap and max heap.

class Heap {
    constructor(data){
        this.heap = [];
    }

    insert(element){
        this.heap.push(element)
    }
}