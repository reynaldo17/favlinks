import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')

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
    props.handleSubmit({ name , url })
    setName('')
    setUrl('')
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
  }

  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
  )
}

export default Form
