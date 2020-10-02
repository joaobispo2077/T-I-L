export class Tasks {
    constructor(objective, status) {

        this._objective = objective;
        this._status = status;


        Object.freeze(this);

    }
    get objective() {
        return this._objective;
    }

    get status() {
        return this._status;
    }

}