import socket from "../socket/socket";

export default async (_, res) => {
  try {
    const { data } = await socket.get("/containers/json");

    res.send(data);
  } catch (error) {
    console.error(error);
  }
};
