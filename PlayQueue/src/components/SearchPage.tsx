import { useEffect, useState } from "react";
import { Game } from "../types";
import gameService from "../api/gameService";
import {Typography } from "@mui/material";
import SearchResults from "./SearchResults";
import { useSearchParams } from "react-router-dom";


function SearchPage() {
    const [searchParams]:any = useSearchParams();
    const search = searchParams.get('q');
    const [searchResults, setSearchResults] = useState<Game[] | null >(null);
    const getSearch = async (q:string) => {
      if(q) {
        const results = await gameService.searchGame(q);
        setSearchResults(results);
      }
    }

    useEffect(() => {
      getSearch(search);
    }, [search]);

    
    if(!searchResults){
      return (<div>
        <Typography variant="h2">Can not find what you were looking for</Typography>
      </div>)
    }

    return (
    <div>
      <SearchResults results={searchResults} />
    </div>
  )
}

export default SearchPage