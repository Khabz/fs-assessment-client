import React from "react";
import { Dispatch } from "@reduxjs/toolkit"
import { Container } from "./people.styles";
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

  React.useEffect(() => {
    fetchPeople(page)
  })
  return (
    <Container>
      {renderPeopleList()}
    </Container>
  );
}
