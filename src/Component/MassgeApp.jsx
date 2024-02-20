
import { Button } from '@mui/material'
import { child, onValue, push, ref, remove, set } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { database } from '../Config/firebaseconfig'
import { uid } from 'uid'

const MassgeApp = () => {
    const [user_input, setUser_input] = useState("")
    const [massage_data, setMassage_data] = useState([])

    const change_handle = (e) => {
        setUser_input(e.target.value)
    }
    if (setUser_input.length === 0) {
        alert("Plz Enter Field")
    }


    const sendMassege = () => {
        const uidd = uid()
        const massage_key = push(child(ref(database), "massages")).key;
        set(ref(database, `massage/${massage_key}`),
            {
                text: user_input,
                key: massage_key,
                uidd:uidd

            })

    }
    

    const delet = (uidd) => {
        
        remove(ref(database, `massage/${massage_key}`))

    }
    const update = ()=>{

    }

    useEffect(() => {
        const data_ref = ref(database, "massage/")
        onValue(data_ref, (snapshot) => {
            const data = snapshot.val()

            const array = Object.values(data)
            setMassage_data(array)
            // console.log(data);
        })
    }, [])
    return (
        <div className='head'>
            <div className='main'>
                <input type="text" placeholder='Send Massage' name="" id=""
                    onChange={change_handle} />
                <Button onClick={sendMassege} variant="contained">Send</Button>&nbsp;&nbsp;
                <Button onClick={()=>remove(ref(database, `massage`))} variant="contained">Clr Chat</Button>

                {/* <button className='btn' onClick={()=>remove(ref(database, `massage`)) }>Clr Chat</button>&nbsp;&nbsp;&nbsp;&nbsp; */}
            </div>
            <div className='li_amin' >
                {massage_data.map((msg, index) => {
                    return <div key={index} className='li_div'> <li className='li' >{msg.text}  </li>
                        <button className='btn' onClick={update}>update</button>

                    </div>
                })}
            </div>
        </div>
    )
}

export default MassgeApp
