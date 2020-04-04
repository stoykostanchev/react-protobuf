import { JokesRequest, JokerClient } from "./proto/joke_grpc_web_pb";
import store from "./store";

const GRPC_WEB_HOST = "http://localhost:3000";
const JokerClientInstance = new JokerClient(GRPC_WEB_HOST);

export const completeGetJokes = jokes => ({
  type: "GOT_JOKES",
  payload: jokes
});

export const getJokes = () =>
  JokerClientInstance.getJokes(new JokesRequest(), {}, (err, response) => {
    if (!err) {
      store.dispatch(
        completeGetJokes(response.getJokesList().map(j => j.toObject()))
      );
    }
  });
