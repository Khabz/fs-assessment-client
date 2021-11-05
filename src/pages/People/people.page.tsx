import React from "react";
import { Dispatch } from "@reduxjs/toolkit"
import { Container } from "./people.styles";
import styled from "styled-components";
import peopleService from "../../services/peopleService";
import { getPeopleSelector, setPeople } from "./people.slice";
import { IResponse } from "../../interfaces/People/response.interface";
import { useDispatch, useSelector } from "react-redux";
import Person from "../../components/Person/person.component";

const actionDispatch = (dispatch: Dispatch) => ({
  setPeople: (people: IResponse) => dispatch(setPeople(people))
})

export default function HomePage() {
  const [page, setPage] = React.useState(1);
  const { setPeople } = actionDispatch(useDispatch());
  const peopleList = useSelector(getPeopleSelector);

  const fetchPeople = async (selectedPage: number) => {
    if (selectedPage) setPage(selectedPage);

    await peopleService.getPeople(page).then((people) => {
      if(people) setPeople(people);
    }).catch((err) => {

    })
  }

  const renderPeopleList = () => {
    return peopleList.results.map((person, index) => (
      <Person person={person} key={index} />
    ))
  }

  const renderPagination = () => {
    if(peopleList.next || peopleList.previous) {
      return (
        <PaginationContainer>
          {peopleList.previous && (
            <button
              className="pagination__button"
              onClick={() => fetchPeople(parseInt(peopleList.previous.split("=")[1]))}
            >
              { '<' }
            </button>
          )}
          {peopleList.next && (
            <button
              className="pagination__button"
              onClick={() => fetchPeople(parseInt(peopleList.next.split("=")[1]))}
            >
              {'>'}
            </button>
          )}
        </PaginationContainer>
      )
    }
  }

  React.useMemo(() => fetchPeople(page), [page])

  return (
    <>
    <Container>
      {renderPeopleList()}
    </Container>
      {renderPagination()}
    </>
  );
}

export const PaginationContainer = styled.div`
  text-align: center;

  button {
    color: #000000;
    background-color: #d5cafa;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 20px;
    cursor: pointer;
    
  }
`
