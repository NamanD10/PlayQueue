
interface Game {
    id:number,
    name:string,
    backgroundImg:string,
    released: Date,
    rating:number,

}

interface GameDetails {
    id:number,
    name:string,
    description: string,
    backgroundImg:string,
    released: Date,
    rating:number,
    website?: string,
    requirements?: {
        minimum: string,
        recommended: string
    },

}

interface GameInStorage { 
    id: number,
    name: string,
}

type UserLists  = {
    Played: GameInStorage[],
    Playing: GameInStorage[],
    Wishlist: GameInStorage[]
}

export type { Game, GameDetails, GameInStorage, UserLists  }
    
