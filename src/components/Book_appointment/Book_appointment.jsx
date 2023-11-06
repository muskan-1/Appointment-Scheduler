import React from 'react'
import { useState, useEffect } from 'react'
import AppointmentForm from '../AppointmentForm'
import { AppointmentProvider } from '../../contexts'

function Book_appointment() {
  const [appointments, setAppointments] = useState([])

  const addAppointment = (appoin) => {
    setAppointments((prev) => [{id: Date.now(), ...appoin}, ...prev] )
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
    <AppointmentProvider value={{appointments, addAppointment}}>
      <div className="min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-Black">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Book Appointment</h1>
                    <div className="mb-4">
                        <AppointmentForm />
                    </div>
                </div>
            </div>
    </AppointmentProvider>
  )
}

export default Book_appointment
