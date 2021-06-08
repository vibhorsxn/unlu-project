import React from "react";

const Pagination = ({paginate}) => {
    const pages = [1,2,3];
    return(
        <div className="page-no">
            {
                pages.map( (page) => <button onClick={ () => paginate(page)}>{page}</button>)
            }
        </div>
    )
}

export default Pagination;