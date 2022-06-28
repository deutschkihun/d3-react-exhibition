import React from 'react'
import { PagninationBtn, Nav } from '../ui-lib/lib';

export const Pagination = ({total,limit,page,setPage}) => {
    const numPages = Math.ceil(total / limit);
    return (
        <>
          <Nav>
            <PagninationBtn onClick={() => setPage(page - 1)} disabled={page === 1}> &lt;</PagninationBtn>
            {Array(numPages)
              .fill()
              .map((_, i) => (
                <PagninationBtn
                  key={i + 1}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? "page" : null}
                >
                  {i + 1}
                </PagninationBtn>
              ))}
            <PagninationBtn onClick={() => setPage(page + 1)} disabled={page === numPages}>&gt;</PagninationBtn>
          </Nav>
        </>
      );
}

