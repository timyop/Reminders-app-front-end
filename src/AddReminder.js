import {useState} from "react"

const AddReminder = () => {
    const [reminder, setReminder] = useState('')

     const handleAddReminder = (event) => {
        setReminder(event.target.value)
     }

     const handleSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/reminders',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: reminder,
                done: false
            })
        })
     }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={reminder} onChange={handleAddReminder} />

            <input type="submit" name="POST" />
        </form>
    )
}

export default AddReminder