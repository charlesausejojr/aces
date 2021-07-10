import { LinearProgress } from '@material-ui/core';
import React, {useState,useEffect} from 'react'
import './Table.css'

function Table() {

    const [eagleScouts,setEagleScouts] = useState([]);
    const [loading,setLoading] = useState(false);
    const url = 'https://obscure-wildwood-66759.herokuapp.com/scouts';
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setEagleScouts(data);
          setLoading(true);
          console.log(data);
        });
      },[]);

    return (
        <div className='table'>
        {!loading?    <LinearProgress color="secondary" /> :<>

            {eagleScouts.map(({name, school, year}) => (
                    <tr>
                        <td className="table__name"><strong>{name}</strong></td>
                        <td className="table__school">{school}</td>
                        <td className="table__year">{year}</td>

                    </tr>
                ))}
        </>}
     
           
        </div>
    )
}

export default Table
