import React, { useEffect ,useState} from "react";

import Event from "../home/Event";

import { getAllEvents } from "../services/api";

function Home(){
    const[events,setEvents]=useState([]);
   
    useEffect(()=>{
         //se apeleaza de fiecare data cand se incarca pagina
    handleEvents();
    },[]);

    async function handleEvents(){
        let  data=await getAllEvents();
        console.log(data);
        setEvents(data);
        console.log(events);
        
    }

    return (
      
    <>
      <header>
        <input id="userId" name="userId" class="userId" type="hidden" value="${userId}"/>
        <ul class="error">
        </ul>
        <div class="wrap header--flex">
            <h1 class="header--logo events">Home</h1>
            <nav>
            <h1 class="signOut">Sign Out</h1>
            </nav>
        </div>
    </header>

    <button id="newEvent" class="button new-event">Add New Event</button>

    <main>
        
        <div class="wrap main--grid root-events">
        
             
             {
                events&&(events.map((event)=>{
                    return <Event event={event}/>
                }
                ))
             }
        </div>
    </main>
    </>
    );
}

export default Home
