import React, { useState } from 'react'
import { SearchBox } from '../ui-lib/lib'

export const SearchEngine = (props) =>  {
    const [SearchTerm, setSearchTerm] = useState("")
    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
            <SearchBox
                onChange={searchHandler}
                value={SearchTerm}
            />
    )
}

