import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (value: string)=> void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    // "   ".trim() == ''
    // !'' = true
    if(!name.trim()){
       return  setError('Name is required')
    }
    else {
        addUserCallback(name)
        setName('')
    }
}

export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
    name.trim() === ''? setError('Name is required'): setError('')
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === "Enter") {
        addUser()
}

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    console.log(users)
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | null>('') // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        error && setError('')
        setError(null)



    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users[users.length-1]?.name || '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
