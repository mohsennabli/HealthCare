import { useEffect, useState } from "react";




function Inscription(){
    const[users ,setUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8090/inscription')
        .then(res=>res.json())
        .then(data=>setUsers(data))
        .catch(error=> console.error('Error fetching users',error));
    },[])

    return
}