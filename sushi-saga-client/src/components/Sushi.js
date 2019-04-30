import React, { Fragment } from 'react'

class Sushi extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
      .then(res => res.json())
      .then(sushis => {
        this.setState({ sushis })
        console.log(sushis)
      })
    }

    render() {
      return (
        this.sushis.map(sushi => {
        <div className="sushi">
          <div className="plate"
               onClick={/* Give me a callback! */ null}>
            {
              /* Tell me if this sushi has been eaten! */
              true ?
                null
              :
                <img src={sushi.img_url} width="100%" />
            }
          </div>
          <h4 className="sushi-details">
            {sushi.name} - ${sushi.price}
          </h4>
        </div>
        }
        )
      )
    }
  }
export default Sushi
