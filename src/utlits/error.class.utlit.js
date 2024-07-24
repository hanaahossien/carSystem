

export class Errorhandlerclass extends Error {
    constructor(message, statusCode ,name, stack) {
    super(message)
        this.statusCode = statusCode;
        this.name = name;

        this.stack = stack;
       
    }

}