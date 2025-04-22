import axios from 'axios';
import  {Game, GameDetails } from '../types';

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_BASE_URL;

const mapToGame = (apiGame:any) :Game => {
  return {
    id : apiGame.id,
    name : apiGame.name,
    backgroundImg : apiGame.background_image,
    released: apiGame.released,
    rating: apiGame.rating,
  };

}

const mapToDetail = (apiGame: any) :GameDetails => { 
  return {
    id: apiGame.id,
    name: apiGame.name,
    description: apiGame.description,
    backgroundImg : apiGame.background_image,
    released: apiGame.released,
    rating: apiGame.rating,
    website: apiGame.website,
    requirements : {
      minimum : apiGame.platforms?.find((item:any) => {item.platform.name==='PC'||item.platform.name==='pc'})?.requirements.minimum,
      recommended : apiGame.platforms?.find((item:any) => {item.platform.name==='PC'||item.platform.name==='pc'})?.requirements.recommended,
    }
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
      console.error("error while fetching games: ", error);
      return []
    }
  },

  getDetails: async(gameId:string | undefined) :Promise<GameDetails | undefined> => {
    try{
      const response:any = await client.get(`/games/${gameId}`);
      const details : GameDetails = mapToDetail(response.data);
      return details;
    } catch (error) {
      console.error(`error while fetching the details of the game ${gameId}`, error);
      return undefined;
    }
  },

}

export default gameService;



 
