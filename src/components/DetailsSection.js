const DetailsSection = ({title, list, description}) =>{
    return(
        <div className='fields'>
          <h3>{title}:</h3>
         { description && <p>{description}</p> }
        
         {list && <ul className="list_grid"> {list.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}</ul>}

        </div>  
    )
}

export default DetailsSection