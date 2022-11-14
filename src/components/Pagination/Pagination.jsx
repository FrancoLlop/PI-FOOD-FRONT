import React from 'react'
import './Pagination.css'

export default function Pagination({pages, paginated, setPage, page}){
let pageAux = []
for (let i = 0; i < pages.length; i++) {
    pageAux.push(i)
}
    
    return(
        <div className='pagination'>
            
            {page -1 >= 0? <button onClick={() => setPage(page-1)}>{'◀'}</button>:<button disabled>◀</button>}

            {pageAux?.map(pag => (
                <button className={pag === page ? 'currentPage' : 'page'} key={pag} onClick={() => paginated(pag)}>{pag +1}</button>
            ))
            }

            {page +1 < pages.length? <button onClick={() => setPage(page+1)}>{'▶'}</button>:<button disabled>▶</button>}
        </div>
    )
}