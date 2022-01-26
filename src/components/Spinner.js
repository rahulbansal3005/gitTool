import React, { Component } from 'react'
import Spiner from './Iphone-spinner-2.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img src={Spiner} alt='Spinner'/>
            </div>
        )
    }
}

export default Spinner
