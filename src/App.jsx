
import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')
  const [event, setEvent] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Registration Successful! Welcome ' + name)

    setName('')
    setEmail('')
    setDepartment('')
    setEvent('')
  }

  return (
    <div className="container">
      <h1>Department Event Registration</h1>
      <p>Register for your favorite college event</p>

      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Department</label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        >
          <option value="">Select Department</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EEE">EEE</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Civil">Civil</option>
        </select>

        <label>Select Event</label>
        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        >
          <option value="">Choose Event</option>
          <option value="Technical Fest">Technical Fest</option>
          <option value="Coding Competition">Coding Competition</option>
          <option value="Workshop">Workshop</option>
          <option value="Cultural Fest">Cultural Fest</option>
        </select>

        <button type="submit">Register Now</button>
      </form>
    </div>
  )
}

export default App
