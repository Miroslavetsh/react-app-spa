import React, {useState, useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const sumbitHandler = event => {
        event.preventDefault()

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note has been created', 'success')
            }).catch(() => {
                alert.show('Something gone wrong((', 'danger')
            })

            setValue('')
        } else {
            alert.show('Enter Note text')
        }
        
    }

    return (
        <form onSubmit={sumbitHandler}>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Enter your note, plz"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}