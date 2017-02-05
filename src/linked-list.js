const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this._head = 0;
        this._tail = 0;

    }

    append(data) {

        if (this.length == 0) {

            this._tail = new Node(data);
            this._head = new Node(data);
            this.length++;
        }
        else {


        }

    }

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
