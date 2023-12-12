import { useState } from 'react'
const Form = (props) => {
  const[name, setName]= useState("")
  const[URL, setURL]= useState("")

  
  const handleNameChange = (event) => {

    console.log(event.target.value)
   setName(event.target.value)
  }
  const handleURLChange = (event) => {

    console.log(event.target.value)
   setURL(event.target.value)
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    
    
            event.preventDefault()
            console.log(name, URL)
            
            props.submitNewLink({name, URL})
            
  }

  return (
    <form onSubmit={onFormSubmit} >
      
        <label for="linkName">Link Name:</label>
        <input type="text" id="linkName"
        name="linkName"  onChange={handleNameChange}/>
        <br />
        <br />
        <label for="URL">Link URL</label>
        <input type="text" id="linkURL"
        name="linkURL" onChange={handleURLChange} />
        <br/>
        <br/>
        <input type = "submit" value="Submit"></input>





      
    </form>
  )
}

export default Form
