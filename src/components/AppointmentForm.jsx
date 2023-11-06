import React, { useState } from 'react'
import { useAppointment } from '../contexts/AppointmentContext';

function AppointmentForm() {
  const [first_name,setFirst_name] = useState("")
  const [last_name,setLast_name] = useState("")
  const [location, setLocation] = useState("")
  const [date,setDate] = useState(new Date())
  const [time,setTime] = useState('10:00')

    const {addAppointment} = useAppointment()

    const add = (e) => {
      e.preventDefault()

      if (!first_name) return

      addAppointment({first_name,last_name,location,date,time})
      setFirst_name("")
      setLast_name("")
      setLocation("")
      setDate("")
      setTime("")
      alert("Added appointment successfully")
    }


  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="First Name"
              className="w-full border rounded-l-lg border-black/10 px-3 outline-none py-1.5"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
          />
            <br/>
          <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-black/10 px-3 outline-none py-1.5"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
          />
          <input
              type="text"
              placeholder="Location"
              className="w-full border border-black/10 px-3 outline-none py-1.5"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
          />
          <input
          type='date'
          value={date}
          className="w-full border border-black/10 px-3 outline-none py-1.5"
          onChange={(e) => setDate(e.target.value)}
          />
          <input
          type='time'
          value={time}
          className="w-full border border-black/10 px-3 outline-none py-1.5"
          onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default AppointmentForm
