import ProverbsList from '../components/proverbs_index';
import ProverbsDetail from '../components/proverbs_detail';

import fetch from 'isomorphic-fetch';
import { createStore } from 'redux';
import { reducers } from '../store/reducers/index';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

const store = createStore(reducers);
const makeStore = () => store;

class Index extends React.Component {

  static async getInitialProps() {
    let response, data;

    try {
      response = await fetch('http://localhost:3001/proverbs');
      data = await response.json();
    } catch (error) {
      console.log(error)
    }

    return { data }
  }

  state = {
    text: "",
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <Provider store={store}>
        <div className="ui grid center aligned">
          <div className="twelve wide column header">
            <div className="ui action input">
              <input
                onChange={this.onChange}
                type="text" placeholder="Search..." />
              <button className="ui button">Search</button>
            </div>
          </div>
          <div className="six wide column">
            <ProverbsList data={this.props.data} />
          </div>
          <div className="ten wide column">
            <ProverbsDetail />
          </div>
        </div>
      </Provider>
    )
  }
}
export default withRedux(makeStore)(Index);