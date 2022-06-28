import React, { useState, useEffect } from 'react'
import * as d3 from 'd3'
import { VizContainer,Title,VizWrapper,Message,SubTitle,Tables } from '../../ui-lib/lib';
import {ParsingDescription} from './ParsingDescription'
import {margin,height} from '../../data'
import {CurvedColorViz} from './CurvedColorViz'
import {StraightColorViz} from './StraightColorViz'

export const Parsingcsv = () => {
    const [info, setInfo] = useState('')
    const [data, setData] = useState(null);
    const csvUrl = 'https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv';

    useEffect(() => {
        d3.csv(csvUrl).then(d => {
            setData(d)
            let message = '';
            message = message + Math.round(d3.csvFormat(d).length / 1024) + 'kB ';
            message = message + d.length + 'rows ';
            message = message + d.columns.length + 'columns';
            setInfo(message)
        })
    }, [])

    if(!info) {
        // loading spnnier implementation 
        return <pre>Loading ...</pre>
    }
    

    return (
        <VizWrapper>
            <VizContainer>
                <Title>Parsing CSV file with d3</Title>
                <Message>
                    CSV is currently the most commonly used data format for data analysis and visualization. 
                    A comma-separated values (CSV) file is a delimited text file that uses a comma to separate values.
                    Therefore, it is one of the important competencies to use csv to process unpurified original data 
                    into the desired form and use it for data visualization and data analysis.
                </Message>

                <SubTitle>In order to parse, data must be asynchronously processed first.</SubTitle>
            </VizContainer>   

            <ParsingDescription />

            <VizContainer>
                <Message>After parsing csv file, we will get a following result. For efficiency use d3.csv to parse csv file.</Message>
            <Tables striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Size</td>
                        <td>{info.split(' ')[0]}</td>
                    </tr>
                    <tr>
                        <td>Row</td>
                        <td>{info.split(' ')[1]}</td>
                    </tr>
                    <tr>
                        <td>Columns</td>
                        <td>{info.split(' ')[2]}</td>
                    </tr>
                </tbody>
            </Tables> 

            <Message>By using parsed csv file, we can vlsualize them into web browser.</Message>
            </VizContainer>    

            <VizContainer>
                <Message>Rendering all color data.</Message>
                <StraightColorViz
                    data={data}
                />
            </VizContainer>
            <VizContainer>
                <Message>Rendering all color data with d3.arc and d3.pie.</Message>
                <CurvedColorViz
                    data={data}
                    height={height}
                    margin={margin}
                />
            </VizContainer>
        </VizWrapper>
    )
}
