
import React from 'react'
import { FaSearch } from 'react-icons/fa'
import "./Searchlist.css"


const Searchlist = ({ Titlearray, setSearchquery }) => {
    return (
      <>
        <div className="Container_SearchList">
            {Titlearray.map(m=>{
                return <p key={m} onClick={e=>setSearchquery(m)} className='titleItem'>
                    <FaSearch/>{m}
                </p>
            })
            }
        </div>
    </>
    );
  };
  
  

export default Searchlist