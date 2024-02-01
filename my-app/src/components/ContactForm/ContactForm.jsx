import { useState } from "react";


export default function ContactForm({onSubmit}) {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleChange = (ev) => {
    switch (ev.currentTarget.name) {
      case 'name':
        setName(ev.currentTarget.value);
        break
      case 'phone':
        setPhone(ev.currentTarget.value);
        break
    }
  }
    
  const submitForm = (ev) => {
      ev.preventDefault()
      onSubmit({ name, phone })
      setName('')
      setPhone('')
  }


    return (
        <form onSubmit={submitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onInput={handleChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="text"
              name="phone"
              value={phone}
              onInput={handleChange}
              required
            />
          </label>
       
          <button type='submit'>Add Contact</button>
        </form>
      )
}

