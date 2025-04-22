import { UserLists, GameInStorage } from "../types";

const STORAGE_KEY = import.meta.env.VITE_STORAGE_KEY

const getUserLists = () :UserLists => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if(stored){
        return JSON.parse(stored);
    } else{ 
        const emptyLists : UserLists = {Played:[], Playing:[], Wishlist:[]};
        localStorage.setItem(STORAGE_KEY, JSON.stringify(emptyLists));
        return emptyLists; 
    }

};

const updateUserLists = (lists:UserLists) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists));

};

const addToList = (gameToStore:GameInStorage, listName: keyof UserLists) :boolean => {
    const storedLists = getUserLists();

    if(!storedLists[listName].includes(gameToStore)){
        storedLists[listName].push(gameToStore);
        updateUserLists(storedLists);
        return true;
    } else {
        return false;
    }
};

const removeFromList = (gameInStore: GameInStorage, listName: keyof UserLists) => {
    const storedLists = getUserLists();
    storedLists[listName] = storedLists[listName].filter((item)=> {item.id !== gameInStore.id});
    updateUserLists(storedLists);
    
}

export {getUserLists, updateUserLists, addToList, removeFromList};