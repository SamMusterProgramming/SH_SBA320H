
import axios from 'axios'


export const shuffleCard = async()=> {
     try {
        await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => console.log(res.data))
     } catch (error) {
        console.log(error)
     }
   
}