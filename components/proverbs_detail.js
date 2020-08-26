import { connect } from 'react-redux';

const proverbsDetail = (proverb) => {
  return (
    <div>
      <h2>{proverb}</h2>
    </div>
  )
}

const mapStateToProps = ({ proverb }) => ({
  proverb: proverb
})

export default connect(mapStateToProps)(proverbsDetail);