import React, { Component } from 'react'
import styled from 'styled-components'

const StyledContainerCity = styled.div`
    display: grid;
    background-color: white;
`

class City extends Component {
    render () {
        return (
            <StyledContainerCity>
                City Data Here
            </StyledContainerCity>
        )
    }
}

export default City