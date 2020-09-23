import ProverbsList from '../components/proverbs_index';
import ProverbsDetail from '../components/proverbs_detail';
import { getProverbs } from '../redux/actions/index';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
      <div>
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
        <style global jsx>
          {`
          @font-face{
            font-family: MMfont;
            src: url('../NotoSansMyanmar-Regular.ttf');
          }
          body{
            font-family: 'MMtfont',sans-serif !important;
          }
        `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    proverbs: state.firebase
  }
}

// export default compose(
//   connect(mapStateToProps, null),
//   firestoreConnect([
//     { collection: 'proverbs' }
//   ])
// )(Index);

export default connect(mapStateToProps)(Index);