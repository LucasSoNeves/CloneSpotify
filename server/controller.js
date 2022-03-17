import { service } from "./service.js"

export class Controller {
    constructor() {
        this.service = new service()
    }

    async getFileStream(filename) {
        return this.service.getFileStream(filename)
    }
}