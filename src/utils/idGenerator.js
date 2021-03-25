class IdGenerator {
    constructor() {
        this._id = 0;
    }
    generateId() {
        return this._id++;
    }
}

export default IdGenerator;