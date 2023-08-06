import React,{useEffect,useState} from "react";
import Event from "./Event";
// import{getAllEvents} from "../../services/api";
import{getAllEvents} from "../services/api";


function Home(){
    
        const [events,setEvents]=useState([]);
    
        useEffect(()=>{
            handleEvents();
            
        },[]);

        async function handleEvents(){
    
        return(
            <div>
                <h1>Events</h1>
                <p><a className="button"></a>Create new event</p>
                <table>
                    <thead>
                        <tr>
                            <th>Event Title</th>
                            <th>Event Date</th>
                            <th>Event Location</th>
                            <th>Event Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.length>0 ?events.map((e)=> <Event event={e}/>):null}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;