const proverbsList = ({ data, selectProverb }) => {
  let i = 1;
  return (
    <div>
      {data.map(d => (
        <div className="ui huge list" key={i++}
          onClick={() => selectProverb(d)}>
          <div className="item">
            <a className="header">
              {d.short}
            </a>
          </div>
        </div>
      )
      )}
    </div >
  )
}

export default proverbsList;