import React from 'react'
import { VizContainer, Title, VizWrapper, Message, SubTitle, Tables } from '../../ui-lib/lib'

export function DataUnderstanding() {
  return (
    <VizWrapper>
      <VizContainer>
        <Title>Data Understanding</Title>
        <Message>
          In general, if you start visualizing data, you just think a lot about how to show the data in a good way. But
          more importantly, it is important to pinpoint the type of data you are trying to visualize and to determine
          which visualization technology you will use to show users. On this page, we will learn about various data
          types and see what visualization techniques it is good to use to visualize each different data type.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Three major datatypes</Title>

        <SubTitle>Table</SubTitle>
        <Message>
          Data types may be largely classified into table, network, and spatial.Table-type data types refer to data type
          methods such as Excel or csv. It is the most commonly used data type when visualizing data.
        </Message>

        <SubTitle>Network</SubTitle>
        <Message>Network structure refers to things like trees made up of nodes and paths.</Message>

        <SubTitle>Spatial</SubTitle>
        <Message>
          Spatial refers to data indicating a location or area on a map, or a part displayed in a specific grid
          structure. In other words, spatial indicates space related data.
        </Message>
      </VizContainer>

      <VizContainer>
        <Title>Attributes types</Title>

        <SubTitle>Categorical</SubTitle>
        <Message>
          Categories are used to classify different types of one field. For example, there are various types of shapes
          such as triangles, squares, circles, and pentagons.
        </Message>

        <SubTitle>Ordinal</SubTitle>
        <Message>
          Ordinal is a slightly different concept from the category. For example, the concepts that are mainly used to
          distinguish the size of clothes are large, medium, and small. These are units used to distinguish sizes,
          although they are not numerically distinguished.
        </Message>
        <SubTitle>Quantitive</SubTitle>
        <Message>
          Quantitive represents the meaning of a word. In other words, it is used to classify into specific figures.
        </Message>

        <SubTitle>Special cases</SubTitle>

        <Tables striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Point</th>
              <th>Region</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Space</td>
              <td>
                Latitude,Longitude <br /> ex.) my current location: quantitive
              </td>
              <td>
                Geographic Identifier <br /> ex.) States,Countries: categorical
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td>
                Instant <br /> ex.) right now: quantitive
              </td>
              <td>
                Interval <br /> ex.) this year: ordinal
              </td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>Value ex.) 5.2: quantitive</td>
              <td>Interval ex.) 5-10 years old: ordinal</td>
            </tr>
          </tbody>
        </Tables>
      </VizContainer>
    </VizWrapper>
  )
}
