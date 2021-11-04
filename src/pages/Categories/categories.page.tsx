/* eslint-disable no-label-var */
import React from "react";
import categoriesService from "../../services/categoriesService";
import { Box, BoxTitle, Container } from "../People/people.styles";

export default function Categories() {
    const [categoryList, setCategoryList] = React.useState([])

    console.log(categoryList);
    const fetchCategories = async () => {
        await categoriesService.getCategories().then((res) => {
            if(res) setCategoryList(res)
        }).catch((err) => {
            console.log(err);
        })
    }

    console.log(categoryList)

    React.useEffect(() => {
        fetchCategories();
    })

    // Reuse People styles just to save time
    const renderCategories = () => {
        return categoryList.map((item, index) => (
            <Box key={index}>
                <BoxTitle>{item}</BoxTitle>
            </Box>
        ))
    }

    return (
        <Container>
            {renderCategories()}
        </Container>
    )
}