import axios from "axios";
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router";

type CategoryParams = {
    name: string
}

interface ICategory {
    id: string;
    value: string;
    url: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
}

export default function CategoryPage() {
    const { name } = useParams<CategoryParams>();
    const [category, setCategory] = React.useState<ICategory>();
    
    const fetchCategory = async () => {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${name}`);
        setCategory(response.data);
    }

    // Stop rendering
    React.useMemo(() => fetchCategory(), [])
    return (
        <Container>
            <img src={category?.icon_url} alt="icon" />
            <p>{category?.value}</p>
        </Container>
    )
}

const Container = styled.div`
    text-align: center;
    margin-top: 50px;
`
