
//file optional, datablock is to map the information on temporary website screen
import React from 'react'

function DataBlock({image}){
    return (
        <div key={image.id}>
           <h1>email: {image.email}</h1>
           <p>image url: {image.url}</p>
        </div>
    )
}
export default DataBlock