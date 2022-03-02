import React, { useState, useEffect } from 'react'
import { Icon, Col, Card, Row } from 'antd';
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import { CheckBox } from '../components/CheckBox';
import { RadioBox } from '../components/RadioBox';
import { SearchEngine } from '../components/SearchEngine';
import { categories, level } from '../data';
import { ImageShowCase } from '../components/ImageShowCase';
import { Container, LandingTitle, SearchContainer } from '../ui-lib/lib';

export const LandingPage = () => {
    const [items, setItems] = useState([])
    // eslint-disable-next-line no-unused-vars
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
            <Card cover={<ImageShowCase name={item.name} />    }>
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
            <LandingTitle>
                Welcome to D3 & React Exhibition <Icon type="car" /> 
            </LandingTitle>
            
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
        </Container>
    )
}