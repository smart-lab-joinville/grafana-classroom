import axios from "axios";

const socket = axios.create({
    // socketPath: "/app/docker.sock",
    socketPath: process.env.SOCKET_PATH,
    baseURL: "http://172.0.0.1:2375/v1.46/"
});

// const api = axios.create({
//     baseURL: "http://localhost/",
//     socketPath: "http+unix://%2Fvar%2Frun%2Fdocker.sock",
// })

export async function testSocket() {
    const res = await axios({
        // socketPath: "/app/docker.sock",
        socketPath: process.env.SOCKET_PATH,
        url: "http://localhost:2375/info",
    });

    console.log(res.status);
    console.log(res.data);

    return await socket.get("/info");
}

testSocket();

export default socket;

console.log("Ok");
