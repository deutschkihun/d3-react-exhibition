import React, { useState } from 'react'
import { Icon, Col, Card, Row, Button } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CheckBox } from './Section/CheckBox';
import { RadioBox } from './Section/RadioBox';
import { SearchEngine } from './Section/SearchEngine';
import { continents, price } from './Section/Data';
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

const SeeMoreContainer = styled.div`
    display: flex;
    justify-content: center;
`;



export const Landing = () => {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })
    const [SearchTerm, setSearchTerm] = useState("")

    const loadMoreHanlder = () => {

        let skip = Skip + Limit
        /*let body = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters
        }*/

        setSkip(skip)
    }

    // need to build a producht data 
    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24} key={index}>
            <Card
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                cover={<a href={`/product/${product._id}`} ></a>}
            >
                <Meta
                    title={product.title}
                    description={`$${product.price}`}
                />
            </Card>
        </Col>
    })

    const showFilteredResults = (filters) => {

        /*let body = {
            skip: 0,
            limit: Limit,
            filters: filters
        }*/

        setSkip(0)

    }


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

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        console.log('filters', filters)

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }
        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerm = (newSearchTerm) => {

        /*let body = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }*/

        setSkip(0)
        setSearchTerm(newSearchTerm)

    }



    return (
        <Container>
            <TitleContainer>
                <Title> Welcome to D3 & React Exhibition <Icon type="car" /> </Title>
            </TitleContainer>

            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox list={continents} handleFilters={filters => handleFilters(filters, "continents")} />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox list={price} handleFilters={filters => handleFilters(filters, "price")} />
                </Col>
            </Row>

            <SearchContainer>
                <SearchEngine refreshFunction={updateSearchTerm}/>
            </SearchContainer>
            
            <Row gutter={[16, 16]} >
                {renderCards}
            </Row>

            <br />

            {PostSize >= Limit &&
                <SeeMoreContainer>
                    <Button onClick={loadMoreHanlder}>See more</Button>
                </SeeMoreContainer>
            }

        </Container>
    )
}

// content
// svg 
// https://www.d3-graph-gallery.com/graph/shape.html