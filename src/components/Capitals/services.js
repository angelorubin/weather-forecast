import {http} from '../../plugins/http'
import axios from 'axios'

// console.log(http())

export async function fetchCapitals() {
  /*
    let clientId = 'dj0yJmk9UXBsOGVyRVJoQmFUJmQ9WVdrOVlXbDRNMjltTnpRbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD0yNA--'
    let clientSecret = '936e000c44ffe1e3423195043073106088097eb6'
    */
    let cities = [
      'rio de janeiro', 'são paulo', 'belo horizonte', 'brasília', 'belém',
      'salvador', 'curitiba', 'fortaleza', 'manaus', 'joão pessoa'
    ]
    
    let promiseArray = []

    cities.map( city => {
      let q = `select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${city},br") and u="c"`
      return promiseArray.push(
        http.get(`yql?q=${q}`)
      )
    })

    try {
      return await axios.all(promiseArray)
    }
    catch (error) {
      return error
    }
}

// /yql?q=${q}