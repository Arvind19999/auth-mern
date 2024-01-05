export const errorHandler = (statusCode,errMgs)=>{
    const error = new Error();
    error.statusCode =  statusCode;
    error.message = errMgs
    return error
}