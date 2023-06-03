export const notFoundMiddleware = (req, res) => {
  res.status(404).send("The resource you are finding does not exist")
}