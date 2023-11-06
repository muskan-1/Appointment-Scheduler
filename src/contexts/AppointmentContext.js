import {createContext, useContext} from "react"

export const AppointmentContext = createContext({
    appointments: [
        {
            id: 1,
            first_name: "Muskan",
            last_name: "khan",
            location: "Mumbai",
            date: "05/11/2023",
            time: "16:40",
        }
    ],
    addAppointment: (appoin) => {},
    updateAppointment: (id,appoin) => {},
    deleteAppointment: (id) => {},
})


export const useAppointment = () => {
    return useContext(AppointmentContext)
}

export const AppointmentProvider = AppointmentContext.Provider