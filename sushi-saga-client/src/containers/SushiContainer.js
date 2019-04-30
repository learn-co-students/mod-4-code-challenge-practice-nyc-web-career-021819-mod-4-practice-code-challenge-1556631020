import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


//both functions below will need to be movved to App so that they can use state

// const ateSushiClick = () => {
//   //need to remove sushi from plate
//   //need to add sushi to an "eaten sushi" array
//   //need to add an empty plate to table - do this in app because table is a sibling and doesn't have access to sushicontainer
// console.log("ate sushi")
// }

const needMoreSushi = () => {
  console.log("need more sushi")
}





  return (
    <Fragment>
      <div className="belt">
        {props.sushiList.map(sushi => (
            <Sushi
              sushiImage={sushi.img_url}
              sushiName={sushi.name}
              sushiPrice={sushi.price}
              ateSushiClick={props.ateSushiClick}
              ateSushi={false} //move this to state so that i can set state with it
            />
          ))}
        <MoreButton needMoreSushi={needMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
