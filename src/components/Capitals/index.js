import React, { Component } from 'react'
import {fetchCapitals} from './services'
import {Table} from '../UI/Table.js'

const CapitalItem = props => {
    return (
        props.capitals.map ( (item, i) => {
            // console.log(item.data)
           let  {low, high} = item.data.query.results.channel.item.forecast[0]
           let {city} = item.data.query.results.channel.location
            return (
                <tr key={i}>
                    <td>{low}º</td>
                    <td>{high}º</td>
                    <td>{city}</td>
                </tr>
            )
        })
    )
}

class Capitals extends Component {
    constructor() {
        super()
        this.state = {
            capitals : []
        }
    }
    componentDidMount() {
        fetchCapitals().then( capitals => {
            this.setState({capitals:capitals})
        })
    }
    componentDidUpdate() {
        console.log(this.state.capitals)
    }
    render () {
        return (
            <div>
                <h2>Capitais</h2>
                <Table>
                    <thead>
                        <tr>
                            <td>Min</td>
                            <td>Max</td>
                            <td>Capital</td>
                        </tr>
                    </thead>
                    <tbody>
                        <CapitalItem capitals={this.state.capitals}/>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Capitals