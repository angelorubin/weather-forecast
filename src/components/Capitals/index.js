import React, { Component } from 'react'
import {fetchCapitals} from './services'
import {Table} from '../UI/Table.js'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
`

const FiveCapitals = props => {
    return (
        <Table>
            <thead>
                <tr>
                    <td>Min</td>
                    <td>Max</td>
                    <td>Capital</td>
                </tr>
            </thead>
            <tbody>
                {
                props.capitals.map ( (item, i) => {
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
                }
            </tbody>
        </Table>
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
    getRangeCities = (start, end) => {
        return this.state.capitals.slice(start, end)
    }
    render () {
        return (
            <div>
                <h2>Capitais</h2>
                <Container>
                    <FiveCapitals capitals={this.getRangeCities(0, 5)}/>
                    <FiveCapitals capitals={this.getRangeCities(5, 10)}/>
                </Container>
            </div>
        )
    }
}

export default Capitals