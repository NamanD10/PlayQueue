import axios from 'axios';
import Game from '../types';

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const mapToGame = (apiGame:any) :Game => {
  return {
    id : apiGame.id,
    name : apiGame.name,
    backgroundImg : apiGame.background_image,
    released: apiGame.released,
    rating: apiGame.released,
  };

}

//creating an axios instance 
const client = axios.create({
  baseURL: baseUrl,
  params: {'key': apiKey}
});

//we export the below object with the necessary functions for respective api call
//TODO: add search game functio to it
const gameService = {
  getGames : async(): Promise<Game[]> => {
    try{
      const response:any = await client.get("/games", {});
      const games: Game[] = response.data.results.map(mapToGame);
      return games;
    }
    catch(error){
      console.error("error whi le fetching games: ", error);
      return []
    }
  },

  getDetails: async(gameId:Number) => {
    try{
      const response = await client.get(`/games/${gameId}`);
      return response.data;
    } catch (error) {
      console.error(`error while fetching the details of the game ${gameId}`, error);
    }
  },

}

export default gameService;



 
