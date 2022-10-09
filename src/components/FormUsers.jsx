import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formUsers.css"
const defaultValues = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
}

const FormUsers = ({createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose}) => {
    const {handleSubmit, register, reset}=useForm()

    useEffect(() => {
        if(updateInfo) {
            reset(updateInfo)
    }
    }, [updateInfo])

    

    const submit = data => {
        if(updateInfo){
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            createNewUser(data)
        }
        
        reset(defaultValues)
        setFormIsClose(true)
    }

    const handleCloseForm = () => {
        setFormIsClose(true)
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <div onClick={handleCloseForm} className='form__x'>Close</div>
        <h2 className='form__title'>{updateInfo ? "Edit User" : "New user"}</h2>
        <div className='form__div'>
            <label className='form__label' htmlFor="email">Email</label>
            <input className='form__input' placeholder='Enter your email' type="email" id="email" {...register("email")}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="password">Password</label>
            <input className='form__input' placeholder='Enter your password' type="password" id="password" {...register("password")}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="first_name">First Name</label>
            <input className='form__input'placeholder='Enter your first name' type="text" id="first_name"{...register("first_name")} />
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="last_name">Last Name</label>
            <input className='form__input' placeholder='Enter your last name' type="text" id="last_name" {...register("last_name")}/>
        </div>
        <div className='form__div'>
            <label className='form__label' htmlFor="birthday">Birthday</label>
            <input className='form__input'type="date" id="birthday" {...register("birthday")} />
        </div>
        <button className='form__button'>{updateInfo ? "Update" : "Create"}</button>
    </form>
  )
}

export default FormUsers