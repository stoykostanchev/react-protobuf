import React from "react";
import { useEffect } from "react";

const jokeStyle = {
  wrapper: {
    height: 80,
  },
  setupCss: {},
  punchlineCss: {
    textAlign: "right",
  },
};

const Joke = ({ id, punchline, setup }) => {
  const { wrapper, setupCss, punchlineCss } = jokeStyle;
  return (
    <article key={id} style={wrapper}>
      <strong style={setupCss}> {setup} </strong>
      <p style={{ ...punchlineCss }}> {punchline} </p>
    </article>
  );
};

const JokesView = ({ loadJokes, activeJoke, changeActiveJoke, timeMS }) => {
  useEffect(() => {
    loadJokes();
    const t = setInterval(() => changeActiveJoke(), timeMS);
    return () => clearInterval(t);
  }, []);

  return <div>{activeJoke && <Joke {...activeJoke} />}</div>;
};

export default JokesView;
