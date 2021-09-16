import React, { useState } from 'react'
import FormUser from '../../components/Form/FormUser'
import Navbar from '../../components/NavBar/Navbar'
import Modal from '../../components/Modal/Modal'

export default function MainScreen() {

    const [air, setAir] = useState('Viva Air')
    const [modalpopup, setModalpopup] = useState(false)

    const handleClick = valAir => {
        setAir(valAir)
    }
    
    return (
        <div>
            {modalpopup && <Modal />}
            <Navbar handleClick={handleClick} />
            <FormUser air={air} setModalpopup={setModalpopup}/>
        </div>
    )
}
