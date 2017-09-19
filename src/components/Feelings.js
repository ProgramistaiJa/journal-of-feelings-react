import React from 'react'

import feelings from '../utils/feelings'

const Feelings = () => (
  <div>
    <h1>Feelings</h1>

    {
      Object.entries(feelings).map(
        ([key, value]) => (
          <div key={key}>
            {
              value.map(
                feeling => (
                  <p key={feeling}>
                    {feeling}
                  </p>
                )
              )
            }
          </div>
        )
      )
    }
  </div>
)

export default Feelings