export default function notFoundHandler(_, res) {
  return res.status(404).send("Not found");
}
