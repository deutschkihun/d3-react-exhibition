import React from 'react'
import { Explanation,Pre } from '../../ui-lib/lib';

export const ParsingDescription = () => {
  return (
    <Explanation>
        <Pre>
                <code>
                    <span>**Using d3.csv **</span>
                    <br/> 
                    <br/> 
                    <span>{'      d3.csv(csvUrl).then(data => {'} </span>
                    <br/> 
                    <span>{'const response = await fetch(url);'} </span>
                    <br/> 
                    <span>{'    return await response.text();'} </span>
                    <br/> 
                    <span>{'};'} </span>
                    <br/> 
                    <span>{'fetchText(csvUrl).then(text => {'} </span>
                    <br/> 
                    <span>{'    const data = d3.csvParse(text);'} </span>
                    <br/> 
                    <span>{'    let message = ""'} </span>
                    <br/> 
                    <span>{'    message = message + Math.round(text.length / 1024) + " kB";'} </span>
                    <br/> 
                    <span>{'    message = message + data.length + " rows";'} </span>
                    <br/> 
                    <span>{'    message = message + data.columns.length + " columns";'} </span>
                    <br/> 
                    <span>{'});'} </span>
                </code>
        </Pre>
        <Pre>
                <code>
                    <span>**Using fetch,async,await from promise **</span>
                    <br/> 
                    <br/> 
                    <span>{'const fetchText = async (url) => {'} </span>
                    <br/> 
                    <span>{'const response = await fetch(url);'} </span>
                    <br/> 
                    <span>{'    return await response.text();'} </span>
                    <br/> 
                    <span>{'};'} </span>
                    <br/> 
                    <span>{'fetchText(csvUrl).then(text => {'} </span>
                    <br/> 
                    <span>{'    const data = d3.csvParse(text);'} </span>
                    <br/> 
                    <span>{'    let message = ""'} </span>
                    <br/> 
                    <span>{'    message = message + Math.round(text.length / 1024) + " kB";'} </span>
                    <br/> 
                    <span>{'    message = message + data.length + " rows";'} </span>
                    <br/> 
                    <span>{'    message = message + data.columns.length + " columns";'} </span>
                    <br/> 
                    <span>{'});'} </span>
                </code>
        </Pre>
    </Explanation>
    )
}

