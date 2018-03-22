import React, { Component } from 'react'
import {searchCity} from './services'
import City from '../City'
import styled from 'styled-components'

const StyledSearch = styled.div`
    display: grid;
    grid-gap: 1rem;
`

const StyledInput = styled.input`
    padding: 0.5rem;
    border: none;
    min-width: 250px;
    width: minmax(250px, 1fr);
`

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchData: [],
            show: false
        }
    }
    handleSearch = e => {
        if(e.key === 'Enter') {
            searchCity(e.target.value)
            .then( data => {
                this.setState({ searchData: data.data.query.results.channel, show: true })
            })
            .catch( error => console.log(error))
        }
    }
    componentDidUpdate(){
        // console.log(this.state.searchData.location)
    }
    render () {
        return (
            <StyledSearch>
                {
                    this.state.show 
                    ? 
                    <City searchData={this.state.searchData}/> 
                    : false
                }
                <StyledInput
                    type="text"
                    placeholder="Insira aqui o nome da cidade"
                    onKeyPress={this.handleSearch}
                />
            </StyledSearch>
        )
    }
}

export default Search