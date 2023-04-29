import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import useAuth from '../../hooks/useAuth';
import axios from "axios";
import { formatDate } from '@fullcalendar/core'


const BookingPage = () => {
    const [events, setEvents] = useState([])
    const [appointment, setAppointment] = useState({})
    const [user, token] = useAuth()

    useEffect(async() => {
      let response = await axios.get('http://127.0.0.1:8000/api/appointments/', { headers: { 'Authorization': `Bearer ${token}` } })
      setEvents(response.data)
    },[]) 

    useEffect(async() => {
      await axios.post('http://127.0.0.1:8000/api/appointments/', appointment, { headers: { 'Authorization': `Bearer ${token}` } })
    }, [appointment]) 

    const handleDate = (date) => {
      const splitDate = date.split('-')
      const formattedDate = `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`
      return formattedDate
    }

    const handleSelect = (info) => {
        const { start, end } = info;
        const eventNamePrompt = prompt("Book your event");
        const body = {
          start: handleDate(formatDate(start, {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, "-")),
          end: handleDate(formatDate(end, {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, "-")),
          title: eventNamePrompt,
          user
        }

        if (eventNamePrompt) {
          setEvents([
            ...events,
            body
          ]);
          setAppointment(body)
        }
      };

      return (
        <FullCalendar 
        plugins={[ dayGridPlugin, interactionPlugin ]}
        events={events}
        select={handleSelect}
        initialView="dayGridMonth"
        headerToolbar={{
            left: "prev, next",
            center: 'title',
            right: 'dayGridMonth'
        }}
        editable
        selectable
        />
    )
};

export default BookingPage;