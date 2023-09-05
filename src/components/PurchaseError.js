import React from 'react'
import Navigationbar from './Navigationbar'
function PurchaseError({ currUser }) {
    return (
        <div><Navigationbar currUser={currUser} />
            <div>Sorry. Something went wrong when you purchase. Please try again!</div>
        </div>
    )
}
export default PurchaseError