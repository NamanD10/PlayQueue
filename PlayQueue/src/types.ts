
interface Game {
    id:number,
    name:string,
    backgroundImg:string,
    released: Date,
    rating:number,

}

interface SystemRequirements {
    minimum: string,
    recommended: string
}

interface GameDetails {
    id:number,
    name:string,
    description: string,
    backgroundImg:string,
    released: Date,
    rating:number,
    website?: string,
    requirements?: SystemRequirements,

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
    
