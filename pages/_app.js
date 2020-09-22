import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "next/app";
import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "../redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(...middlewares))
);

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper.withRedux(MyApp);

