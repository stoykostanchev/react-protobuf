import { JokesRequest, JokerClient } from "./proto/joke_grpc_web_pb";

const GRPC_WEB_HOST = "http://localhost:3000";
const JokerClientInstance = new JokerClient(GRPC_WEB_HOST);

export const GOT_JOKES = "GOT_JOKES";
export const CHANGED_ACTIVE_JOKE = "CHANGED_ACTIVE_JOKE";
export const SELECT_ASSET = "SELECT_ASSET";
export const DESELECT_ASSET = "DESELECT_ASSET";

export const completeGetJokes = (jokes) => ({
  type: GOT_JOKES,
  payload: jokes,
});

export const getJokes = () => (dispatch) =>
  JokerClientInstance.getJokes(new JokesRequest(), {}, (err, response) => {
    if (!err) {
      dispatch(
        completeGetJokes(response.getJokesList().map((j) => j.toObject()))
      );
    }
  });

export const changeActiveJoke = () => ({ type: CHANGED_ACTIVE_JOKE });

export const selectAsset = (id) => ({ type: SELECT_ASSET, payload: id });

export const deselectAsset = (id) => ({ type: DESELECT_ASSET, payload: id });
