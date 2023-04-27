import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const BookingPage = () => {
    return (
        <FullCalendar 
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        />
    )
};

export default BookingPage;