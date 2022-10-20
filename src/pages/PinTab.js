import React from 'react'
import { useParams } from 'react-router-dom'

function PinTab() {
    const {pin} = useParams()
  return (
    <div>
        <p>Your Activation Pin is</p>
        <h2> {pin} </h2>
        <p>Don't share with anyone. Pin can only be used once</p>
        <p>Download DelzyScholar App, select the purchased course and input your activation pin to access the materials</p>
        <div>
            <button>Download for Android</button>
            <button>Download for iOS</button>
        </div>
    </div>
  )
}

export default PinTab