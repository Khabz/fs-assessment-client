/* eslint-disable no-label-var */
import React from "react";
import { Link } from "react-router-dom";
import categoriesService from "../../services/categoriesService";
import { Box, BoxTitle, Container } from "../People/people.styles";

export default function Categories() {
    const [categoryList, setCategoryList] = React.useState([])

    const fetchCategories = async () => {
        await categoriesService.getCategories().then((res) => {
            if(res) setCategoryList(res)
        }).catch((err) => {
            console.log(err);
        })
    }

    React.useMemo(() => fetchCategories(), [categoryList])

    // Reuse People styles just to save time
    const renderCategories = () => {
        return categoryList.map((item, index) => (
            <Box key={index}>
                <Link
                    to={`category/${item}`}
                >
                    <BoxTitle>{item}</BoxTitle>
                </Link>
            </Box>
        ))
    }

    return (
        <Container>
            {renderCategories()}
        </Container>
    )
}