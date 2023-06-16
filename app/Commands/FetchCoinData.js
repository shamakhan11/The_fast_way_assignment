'use strict'
const { Command } = require('@adonisjs/ace')
const axios = require('axios')
const Coin = use('App/Models/Coin')


class FetchCoinData extends Command {
  static get signature() {
    return 'fetch:coin-data'
  }

  static get description() {
    return 'Fetches coin data from the Coingecko API and stores it in the database'
  }
  
  async handle() {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
      const coins = response.data
      this.info("Fetched data from url")
      for (const coin of coins) {
        console.log(coin)
        const coinData = {
          id: coin.id,
          symbol: coin.symbol,
          name: coin.name,
          platforms: JSON.stringify(coin.platforms)
        }
        await Coin.create(coinData)
 
      }
      

      this.info('Coin data fetched and stored successfully')
    } catch (error) {
      this.error('An error occurred while fetching or storing the coin data')
      this.error(error.message)
    }
  }
}

module.exports = FetchCoinData
