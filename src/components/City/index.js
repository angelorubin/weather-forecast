import React, { Component } from 'react'
import styled from 'styled-components'

const ywcc_ptbr = [
    [ '0', 'tornado' ],
    [ '1', 'tempestade tropical' ],
    [ '2', 'furacão' ],
    [ '3', 'tempestade severa' ],
    [ '4', 'trovoadas' ],
    [ '5', 'chuva e neve' ],
    [ '6', 'chuva e granizo fino' ],
    [ '7', 'neve e granizo fino' ],
    [ '8', 'garoa gélida' ],
    [ '9', 'garoa' ],
    [ '10', 'chuva gélida' ],
    [ '11', 'chuvisco' ],
    [ '12', 'chuva' ],
    [ '13', 'neve em flocos finos' ],
    [ '14', 'leve precipitação de neve' ],
    [ '15', 'ventos com neve' ],
    [ '16', 'neve' ],
    [ '17', 'chuva de granizo' ],
    [ '18', 'pouco granizo' ],
    [ '19', 'pó em suspensão' ],
    [ '20', 'neblina' ],
    [ '21', 'névoa seca' ],
    [ '22', 'enfumaçado' ],
    [ '23', 'vendaval' ],
    [ '24', 'ventando' ],
    [ '25', 'frio' ],
    [ '26', 'nublado' ],
    [ '27', 'muitas nuvens (noite)' ],
    [ '28', 'muitas nuvens (dia)' ],
    [ '29', 'parcialmente nublado (noite)' ],
    [ '30', 'parcialmente nublado (dia)' ],
    [ '31', 'céu limpo (noite)' ],
    [ '32', 'ensolarado' ],
    [ '33', 'tempo bom (noite)' ],
    [ '34', 'tempo bom (dia)' ],
    [ '35', 'chuva e granizo' ],
    [ '36', 'quente' ],
    [ '37', 'tempestades isoladas' ],
    [ '38', 'tempestades esparsas' ],
    [ '39', 'tempestades esparsas' ],
    [ '40', 'chuvas esparsas' ],
    [ '41', 'nevasca' ],
    [ '42', 'tempestades de neve esparsas' ],
    [ '43', 'nevasca' ],
    [ '44', 'parcialmente nublado' ],
    [ '45', 'chuva com trovoadas' ],
    [ '46', 'tempestade de neve' ],
    [ '47', 'relâmpagos e chuvas isoladas' ],
    [ '3200', 'não disponível' ]
]

const StyledCity = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 2rem;
    color: black;
    background-color: white;
`

const StyledLocationItems = styled.div`
    display: grid;
    font-weight: bolder;
    grid-template-columns: repeat(2, minmax(min-content, max-content));
    grid-gap: 0.5rem;
    grid-template-areas:
    "city region country";
    .city {
        grid-area: city;
    }
    .region {
        grid-area: region;
    }
    .country {
        grid-area: country;
    }
`

const Location = (props) => {
   return (
        <StyledLocationItems>
            <div className="city">{props.location.city},</div>
            <div className="region">{props.location.region} - </div>
            <div className="country">{props.location.country}</div>
        </StyledLocationItems>
    )
}

const StyledConditionItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(min-content,max-content));
    grid-gap: 1rem;
`

const translateCode = code => {
    let arrayLength = ywcc_ptbr.length
    for (let i = 0; i < arrayLength; i++) {
        if (code == ywcc_ptbr[i][0]) {
            return ywcc_ptbr[i][1];
        }                
    }
}

const toUpperCase = (phrase) => {
    return phrase
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
}

const Condition = (props) => {
    return(
        <StyledConditionItems>
            <h2>{props.condition.temp}ºC</h2>
            <h2>
                {
                    toUpperCase(translateCode(props.condition.code))
                }
            </h2>
        </StyledConditionItems>
    )
}

class City extends Component {
    constructor(props){
        super(props)
    }
    componentWillReceiveProps(){
        console.log(this.props.searchData)
    }
    render () {
        return (
            <StyledCity>
                <Location location={this.props.searchData.location}/>
                <Condition condition={this.props.searchData.item.condition}/>
                {/*
                <div>mínima, máxima, sensação, graus</div>
                <div>vento, velocidade, humidade, porcentagem</div>
                <hr/>
                <div>tabela da semana temperatura min e max</div>
                */}
            </StyledCity>
        )
    }
}

export default City