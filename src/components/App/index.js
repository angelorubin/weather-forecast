import React, { Component } from 'react'
import styled from 'styled-components'
import City from '../City'
import Search from '../Search'
import Capitals from '../Capitals'

const StyledContainerApp = styled.div`
    display: grid;
    grid-template-rows: repeat(4, minmax(10vh, auto));
    background-color: orange;
    color: white;
    justify-content: center;
    align-content: center;
    justify-items: center;
    height: 100vh;
    background: linear-gradient(orangered, orange);
` 

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            city: null,
            show: false
        }
    }
    componentDidUpdate() {
        console.log(typeof this.state.city)  
    }
handleSearch(e) {
        console.log(e.target.value)
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
            <StyledContainerApp>
                <div>
                    <h1>Previsão do Tempo</h1>
                </div>
                { this.state.show ? <City/> : null }
                <Search search={this.handleSearch}/>
                <Capitals/>
            </StyledContainerApp>
        )
    }
}

export default App