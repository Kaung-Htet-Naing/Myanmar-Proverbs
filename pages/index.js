import ProverbsList from '../components/proverbs_index';
import ProverbsDetail from '../components/proverbs_detail';
import { createContext } from 'react';

import fetch from 'isomorphic-fetch';
const MyContext = createContext();

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
    proverb: null
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onSelectProverb = (data) => {
    this.setState({ proverb: data })
  }

  render() {
    return (
      <MyContext.Provider>
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
            <ProverbsList data={this.props.data} selectProverb={this.onSelectProverb} />
          </div>
          <div className="ten wide column">
            <ProverbsDetail proverb={this.state.proverb} />
          </div>
        </div>
      </MyContext.Provider>
    )
  }
}
export default Index;