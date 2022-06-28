import React, { useState, useEffect } from 'react'
import { Col, Card, Row } from 'antd';
import axios from "axios";
import Meta from 'antd/lib/card/Meta';
import { CheckBox } from '../components/CheckBox';
import { RadioBox } from '../components/RadioBox';
import { SearchEngine } from '../components/SearchEngine';
import { categories, level } from '../data';
import { ImageShowCase } from '../components/ImageShowCase';
import { Container, Title } from '../ui-lib/lib';
import {LoadingView} from '../components/LoadingView'
import {Pagination} from '../components/Pagination'

export const LandingPage = () => {
    const [limit, setLimit] = useState(8);
    const [page, setPage] = useState(1);
    const offset = (page -1) * limit
    const [items, setItems] = useState([])
    const [Filters, setFilters] = useState({ categories: [], level: [] })

    useEffect(() => { getAllProducts()}, [])

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
                   .then(response => response.data.success ? setItems([...response.data.data]) : alert("Fail to load data"))
    }

    const renderCards = items.slice(offset,offset + limit).map((item, index) => {
        return <Col lg={6} md={8} xs={24} key={index}>
            <Card cover={<ImageShowCase name={item.name} />}>
                <Meta
                    title={item.name}
                    description={`${item.description}`}
                />
            </Card>
        </Col>
    })

    const updateSearchTerm = (newSearchTerm) => {
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
            <Title>Welcome to D3 & React Exhibition</Title>
            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24}>
                    <CheckBox list={categories} handleFilters={filters => handleFilters(filters, "categories")} />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox list={level} handleFilters={filters => handleFilters(filters, "level")} />
                </Col>
            </Row>

            <SearchEngine refreshFunction={updateSearchTerm}/>
            
            <Row gutter={[16, 16]} >
                {items.length === 0 ? <LoadingView title={"Loading ..."} body={"please wait a moment"} /> : renderCards}
            </Row>

            <label style={{margin:'1rem 0rem'}}>
                Number of posts to display per page:&nbsp;
                <select
                    type="number"
                    value={limit}
                    onChange={({ target: { value } }) => setLimit(Number(value))}
                >
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
                <option value="80">80</option>
                <option value="100">100</option>
                </select>
            </label>

            <footer>
                <Pagination
                    total={items.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </footer>
        </Container>
    )
}