import { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
//stateful component that renders dynamically

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [events, setEvents] = useState([])

  useEffect(async() => {
    let response = await axios.get('http://127.0.0.1:8000/api/appointments/', { headers: { 'Authorization': `Bearer ${token}` } })
    setEvents(response.data)
  },[]) 

  return (
    <div className="container">
      <h1>Home Page for {user.first_name}!</h1>
      <h3>Upcoming Events</h3>
      <div style={{backgroundColor:"steelblue", padding:"3rem"}}>
        {events?.map(({title, start, end}) => (
          <ul style={{margin:"1rem", border:"solid 2px white", padding:"1rem"}}>
            <li>{title}</li>
            <li>{start}</li>
            <li>{end}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
