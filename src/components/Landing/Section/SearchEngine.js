import React, { useState } from 'react'
import { Input } from 'antd';
import styled from 'styled-components'

const { Search } = Input;
const SearchBox = styled(Search)`
    width: 200px;
`

export const SearchEngine = (props) =>  {

    const [SearchTerm, setSearchTerm] = useState("")
    const searchHandler = (event) => {
        console.log(event.currentTarget.value)
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
            <SearchBox
                placeholder="input search text"
                onChange={searchHandler}
                value={SearchTerm}
            />
    )
}

