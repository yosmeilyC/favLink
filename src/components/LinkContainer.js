
import { useState } from 'react'
import Table from './Table.js';
import Form from './Form.js';
const LinkContainer = (props) => {

const[favLinks, setFavLinks]=useState([])

  const handleRemove = (index) => {
  

        setFavLinks(favLinks.filter((_, i) => i !== index))
  }

  const handleSubmit = (favLink) => {
   

   setFavLinks ([...favLinks, favLink])
            
  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
    
     
      <Table data={favLinks} prop2 prop3 removeLink={handleRemove}/>

      <br />

      <h3>Add New</h3>
      <Form submitNewLink={handleSubmit}/>
    </div>
  )
}

export default LinkContainer
