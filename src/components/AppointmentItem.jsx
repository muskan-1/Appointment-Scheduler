import React, { useState } from 'react'
import { useAppointment } from '../contexts/AppointmentContext';
import "react-datepicker/dist/react-datepicker.css"

function AppointmentItem({appoin}) {
    const [isAppointmentEditable, setIsAppointmentEditable] = useState(false)
    const [firstName,setFirstName] = useState(appoin.first_name)
    const [lastName,setLastName] = useState(appoin.last_name)
    const [loc,setLoc] = useState(appoin.location)
    const [dat,setDat] = useState(appoin.date)
    const [appointmentTime,setAppointmentTime] = useState(appoin.time) 
    const {updateAppointment, deleteAppointment} = useAppointment()

    const editAppointment =() =>{
        updateAppointment(appoin.id,{...appoin,first_name:firstName,last_name:lastName,location:loc,date:dat,time:appointmentTime })
        setIsAppointmentEditable(false)
        alert("Appointment edited successfully")
    }

  return (
    <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black 
              bg-blue-200
          }`}
      >
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isAppointmentEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              readOnly={!isAppointmentEditable}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isAppointmentEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              readOnly={!isAppointmentEditable}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isAppointmentEditable ? "border-black/10 px-2" : "border-transparent"
              } `}
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              readOnly={!isAppointmentEditable}
          />
          <input
          type='date'
          value={dat}
          className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          onChange={(e) => setDat(e.target.value)}
          readOnly={!isAppointmentEditable}
          />
          <input
          type='time'
          value={appointmentTime}
          className="w-full border border-black/10 rounded-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
          onChange={(e) => setAppointmentTime(e.target.value)}
          readOnly={!isAppointmentEditable}
          />
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {

                  if (isAppointmentEditable) {
                      editAppointment();
                  } else setIsAppointmentEditable((prev) => !prev);
              }}
          >
              {isAppointmentEditable ? "📁" : "✏️"}
          </button>
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteAppointment(appoin.id)}
              
          >
              ❌
          </button>
      </div>
  )
}

export default AppointmentItem
