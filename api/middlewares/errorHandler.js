import { CustomAPIError } from "../errors/custom-errors.js";


const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  if(err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg: err.message})
  }
  return res.status(500).json({ msg: ' Something went wrong, try again later' })
}

export default errorHandlerMiddleware;