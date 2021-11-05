import React from "react";
import styled from "styled-components";
import httpCommon from "../../config/httpCommon";
import { IPerson } from "../../interfaces/People/person.interface";

interface IJokes {
    id: string;
    value: string;
    url: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
}

interface SearchResults {
    joke: IJokes[],
    people: IPerson[]
}

export default function Search() {

    const [ searchResults, setSearchResults ] = React.useState<SearchResults>();

    const searchQuery = async (search: any) => {
        const val = search.target.value;
        if(search !== '' && val.length >= 3) {
            const response = await httpCommon.get(`search/searchbyquery?query=${val}`)
    
            setSearchResults(response.data);
        }
    }
    const renderJokes = () => {
        if(searchResults && searchResults.joke && searchResults.joke.length > 0) {
            return (
                <>
                    <h1>Joke Results</h1>
                    {searchResults.joke.map((item) => (
                        <div key={item.id}><img src={item.icon_url} alt="icon" /><p>{item.value}</p></div>
                    ))}
                </>
            )
        }
    }

    const renderPeople = () => {
        if(searchResults && searchResults.people && searchResults.people.length > 0) {
            return (
                <>
                    <h1>People Results</h1>
                    {searchResults.people.map((item) => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </>
            )
        }
    }
    return (
        <Container>
            <SearchBar>
                <h1>Search Jokes and Starwars Characters</h1>
                <Input 
                    placeholder="search......."
                    onChange={(value) => searchQuery(value)}
                />
            </SearchBar>   
            {renderPeople()} 
            {renderJokes()}
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    padding-top: 40px;
`;

const SearchBar = styled.div`
    margin: auto;
    max-width: 800px
`;

export const Input = styled.input`
  font-size: 18px;
  margin-top: 20px;
  padding: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  text-align: center;
  width: 80%
`;