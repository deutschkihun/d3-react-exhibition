import React, { useState } from 'react'
import { Icon, Col, Card, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckBox } from './Section/CheckBox';
import { RadioBox } from './Section/RadioBox';
import { SearchEngine } from './Section/SearchEngine';
import { categories, price, previewData } from './Section/Data';
import { ImageSlider } from '../utils/ImageSilder';
import styled from "styled-components"

const Container = styled.div`
    width: 75%;
    margin: 3rem auto;
`;

const TitleContainer = styled.div`
    text-align:center;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 1rem auto;
`;

const Title = styled.h2``;

export const Landing = () => {
    const [SearchTerm, setSearchTerm] = useState("")
    const [preview, setpreview] = useState(previewData)
    const [Filters, setFilters] = useState({
        categories: [],
        price: []
    })

    const renderCards = previewData.map((preview, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                cover={<a href={`/product/${preview._id}`} ><ImageSlider images={preview.images} /></a>}
            >
                <Meta
                    title={preview.name}
                    description={`$${preview.price}`}
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {
 
        /*const test = previewData.filter((element) => element['categoryNr.'] === 1)
        console.log(test)*/
    
       //const fwefw = preview.filter((element) =>  filters.categories.forEach((index) => index === element._id ))
        /*const previewUpdate = preview.filter((element) => filters.categories.forEach((index) => 
            index === element._id
        ))
        console.log(previewUpdate)*/
       /*
       {
    "categories": [
        3
    ],
    "price": [
        280,
        299
    ]
}*/
    }

    /*const updateSearchTerm = (newSearchTerm) => {
        let body = {
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSearchTerm(newSearchTerm)

    }*/

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {
            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        return array;
    }

    const handleFilters = (filters, field) => {

        const newFilters = { ...Filters }
        newFilters[field] = filters

        if (field === "price") {
            let priceValues = handlePrice(filters)
            newFilters[field] = priceValues
        }

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }
    return (
        <Container>
            <TitleContainer>
                <Title> Welcome to D3 & React Exhibition <Icon type="car" /> </Title>
            </TitleContainer>

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox list={categories} handleFilters={filters => handleFilters(filters, "categories")} />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox list={price} handleFilters={filters => handleFilters(filters, "price")} />
                </Col>
            </Row>

            <SearchContainer>
                {/*<SearchEngine refreshFunction={updateSearchTerm}/>*/}
                <SearchEngine />
            </SearchContainer>
            
            <Row gutter={[16, 16]} >
                {renderCards}
            </Row>
            <br />
        </Container>
    )
}