import React, { Component } from 'react'
import styled from 'styled-components'
import City from '../City'
import Search from '../Search'
import Capitals from '../Capitals'

const StyledApp = styled.div`
    display: grid;
    grid-gap: 0.5rem;
    grid-template-rows: repeat(3, minmax(min-content, max-content));
    color: white;
    height: 100vh;
    background: linear-gradient(orangered, orange);
    justify-items: center;
` 

const Title = styled.h1`
    font-size: 2.5rem;
`

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: [],
            show: false
        }
    }
    handler = e => {
        // console.log(typeof e.target.value)
        let city = e.target.value
        if(city.length >= 4) {
            this.setState({ show: true, city: city })
        }
        else {
            this.setState({ show: false, city: [] })
        }
        return null
        // this.state.isActive = true
        // let id = 36379 // Rio Claro
        /*
        let apikey = '6X6rzUOoFdaGAi0Hr2IyFuhNaohb0JmT'
        let baseUrl = 'http://dataservice.accuweather.com/locations/v1'
        let q = e.target.value
        let url = `${baseUrl}/cities/search?q=${q}&apikey=${apikey}&language=pt-br&details=true&offset=1`
        fetch(url)
        .then(response => response.json())
        .then( (resp) => {
            console.log(resp)
            let joined = this.state.city.push(resp)
            this.setState({ city: resp })
        })
        .catch(err => console.log(err))
        */
    }
    render () {
        return (
            <StyledApp>
                <Title>Previsão do tempo</Title>
                <Search/>
                <Capitals/>
            </StyledApp>
        )
    }
}

export default App