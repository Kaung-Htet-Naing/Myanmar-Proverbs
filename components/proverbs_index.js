import { selectedProverb } from '../store/actions/index';
import { connect } from 'react-redux';

const proverbsList = ({ data, selectedProverb }) => {

  return (
    <div>
      {data.map(d => (
        <div className="ui huge list" onClick={selectedProverb(d)}>
          <div className="item">
            <a className="header">
              {d.short}
            </a>
          </div>
        </div>
      )
      )}
    </div>
  )
}

export default connect(null, { selectedProverb })(proverbsList);