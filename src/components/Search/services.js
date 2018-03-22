
import axios from 'axios'
import {http} from '../../plugins/http'

 const searchCity = city => {
    let q = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city},br") and u="c"`
    return http.get(`yql?q=${q}`)
}

export { 
	searchCity
}