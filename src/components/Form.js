import { useState } from 'react'

const Form = ({handleSubmit}) => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const data =  {handleSubmit}
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    const{ name, value } = event.target
    if (name === 'name') {
      setName(value)
    } 
    if (name === 'url') {
      setUrl(value)
    }
  }

  function onFormSubmit(event) {
    // to prevent page reload on form submit
    event.preventDefault()
    data.handleSubmit({ name , url })
    setName('')
    setUrl('')
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form onSubmit={onFormSubmit}>
    <label>
      Name:
    <input type="text" name="name" value={name} onChange={handleChange} /><br/>
    </label>
    <label>
      URL:
      <input type="text" name="url" value={url} onChange={handleChange} /><br/>
    </label>
    <button type="submit">submit</button>
  </form>
  )
}

export default Form
