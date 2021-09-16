import React, { useState } from 'react'

export default function FormUser({air, setModalpopup}) {

    const [loginData, setLoginData] = useState({
        name: '',
        mail: '',
        phone: '',
        age: 0
    })

    const [errors, setErrors] = useState({
        name: '',
        mail: '',
        age: 0
    })

    const handleChangeLogin = e => {
        const {name, value} = e.target
        setLoginData({...loginData, [name]: value})
    }

    const validate = values => {
        let errors = {}

        if(!isNaN(values.name)){
            errors.name = 'Valor erroneo en campo Nombre'
        }

        if(!isNaN(values.mail)){
            errors.mail = "Por favor, ingresa un correo valido"
        }

        if(typeof values.mail !== "undefined"){
            let positionAt = values.mail.lastIndexOf('@');
            let positionDot = values.mail.lastIndexOf('.');
 
            if (!(positionAt < positionDot && positionAt > 0)) {
                errors.mail = "Por favor, ingresa un correo válido.";
            }
        }
        
        if(values.age < 18 || values.age > 100){
            errors.age = "El rango de edad no es el indicado";
        }

        return errors
    }

    const handleSubmit = e => {
        e.preventDefault()
        const result = validate(loginData)
        setErrors(result)
        setLoginData({errors: result})
        setLoginData({
            name: '',
            mail: '',
            phone: '',
            age: 0
        })
        if(!Object.keys(result).length){
            console.log(loginData)
            setModalpopup(true)
            setLoginData({
                name: '',
                mail: '',
                phone: '',
                age: 0
            })
        }
        setTimeout(function(){setModalpopup(false)}, 5000)
    }

    return (
        <section className='formuser'>
            <section className='formuser-herosection'>
                <div className='formuser-herosection-title'>
                    <h1>Formulario</h1><br />
                    <p>Hola, bienvenido, sabemos que quieres viajar en <b>{air}</b>, por favor diligencia el siguiente formulario:</p>
                </div>
            </section>

            <section className='formuser-formsection'>
                <form onSubmit={handleSubmit} className='formuser-formsection-camps'>

                    <label className='label' htmlFor="name">Nombre completo</label>
                    <input autoComplete='null' id='name'
                        placeholder='Digita tu nombre completo'
                        type="text"
                        name='name'
                        onChange={handleChangeLogin}
                        value={loginData.name}
                        className='camps__inputs'
                        required
                    />
                    {errors.name && <p className='msg__error'>{errors.name}</p>}
                    <label className='label' htmlFor="mail">E-mail</label>
                    <input autoComplete='null' id='mail'
                        placeholder='Digite su Correo electronico'
                        type="text"
                        name='mail'
                        onChange={handleChangeLogin}
                        value={loginData.mail}
                        className='camps__inputs'
                        required
                    />
                    {errors.mail && <p className='msg__error'>{errors.mail}</p>}
                    <label className='label' htmlFor="phone">Numero de Celular</label>
                    <input id='phone'
                        placeholder='Digite su numero de celular'
                        type="number"
                        name='phone'
                        onChange={handleChangeLogin}
                        value={loginData.phone}
                        className='camps__inputs'
                        required
                    />

                    <label className='label' htmlFor="age">Edad</label>
                    <input id='age'
                        placeholder='Digite su edad'
                        type="number"
                        name='age'
                        onChange={handleChangeLogin}
                        value={loginData.age}
                        className='camps__inputs'
                        required
                    />
                    {errors.age && <p className='msg__error'>{errors.age}</p>}
                    <button type='submmit'>ENVIAR</button>
                </form>
            </section>
        </section>
    )
}