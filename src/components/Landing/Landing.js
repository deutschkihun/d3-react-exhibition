import React, { useState, useEffect } from 'react'
import { Icon, Col, Card, Row } from 'antd';
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import { CheckBox } from './Section/CheckBox';
import { RadioBox } from './Section/RadioBox';
import { SearchEngine } from './Section/SearchEngine';
import { categories, level } from './Section/Data';
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
    const [items, setItems] = useState([])
    const [SearchTerm, setSearchTerm] = useState("")
    const [Filters, setFilters] = useState({
        categories: [],
        level: []
    })

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        await axios.get('/api/v1/products')
            .then(response => {
                if(response.data.length > 0) {
                    setItems(response.data.d3react)
                }
            })
    }

    const getProducts = async (body) => {
        await axios.post('/api/v1/products/filter', body)
            .then(response => {
                if (response.data.success) {
                    setItems([...response.data.data])
                } else {
                    alert("Fail to load data")
                }
            })
    }


    const renderCards = items.map((item, index) => {
        return <Col lg={6} md={8} xs={24} key={index}>
            <Card cover={<a href={`/product/${item._id}`} ><ImageSlider images={item.images} /></a>}>
                <Meta
                    title={item.name}
                    description={`${item.description}`}
                />
            </Card>
        </Col>
    })

    const updateSearchTerm = (newSearchTerm) => {
        setSearchTerm(newSearchTerm)
        getProducts({
            filters: Filters,
            searchTerm: newSearchTerm
        })

    }

    const handleFilters = (filters, field) => {
        const newFilters = { ...Filters }
        newFilters[field] = filters;
        setFilters(newFilters)
        getProducts({
                filters:newFilters,
            }).then(() => setFilters(newFilters))
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
                    <RadioBox list={level} handleFilters={filters => handleFilters(filters, "level")} />
                </Col>
            </Row>

            <SearchContainer>
                <SearchEngine refreshFunction={updateSearchTerm}/>
            </SearchContainer>
            
            <Row gutter={[16, 16]} >
                {renderCards}
            </Row>
            <br />
        </Container>
    )
}