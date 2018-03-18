import React from 'react'

const Search = props => {
    return (
        <div>
            <input
                style={{ 'padding' :'5px'}}
                type="text"
                size="30"
                placeholder="Insira aqui o nome da cidade"
                onBlur={props.search}
            />
        </div>
    )
}

export default Search