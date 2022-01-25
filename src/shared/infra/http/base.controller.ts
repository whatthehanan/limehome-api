export abstract class BaseController {

    public ok<T>(dto?: T) {
        return {
            status: "success",
            ...dto
        }
    }

    public fail<T>(error: Error | string) {
        return {
            status: "failure",
            message: error
        }
    }
}