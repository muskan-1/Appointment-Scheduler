import React from "react";
import { AppointmentProvider } from "../../contexts";
import { useState,useEffect } from "react";
import AppointmentItem from '../AppointmentItem'

function Show_appointment() {
    const [appointments, setAppointments] = useState([])

    const updateAppointment = (id,appoin) => {
        setAppointments((prev) => prev.map((prevAppointment) => (prevAppointment.id === id ? appoin : prevAppointment )))
      }

      const deleteAppointment = (id) => {
        setAppointments((prev) => prev.filter((appoin) => appoin.id !== id));
        alert("delete Appointment")
      }

      useEffect(() => {
        const appointments = JSON.parse(localStorage.getItem("appointments"))
    
        if (appointments && appointments.length > 0) {
          setAppointments(appointments)
        }
      }, [])
    
      useEffect(() => {
        localStorage.setItem("appointments", JSON.stringify(appointments))
      }, [appointments])
      

    return (
        <AppointmentProvider value={{appointments,updateAppointment,deleteAppointment}}>
          <div className="min-h-screen py-8">
                    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-Black">
                        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Show Appointment</h1>
                        <div className="flex flex-wrap gap-y-3">
                            {appointments.map((appoin) => (
                              <div key={appoin.id}
                              className='w-full'
                              >
                                <AppointmentItem appoin={appoin}/>
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
        </AppointmentProvider>
      )
}

export default Show_appointment
