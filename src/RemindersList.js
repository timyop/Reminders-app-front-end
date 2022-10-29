import {useState, useEffect} from 'react'
import Reminder from "./Reminder";

const RemindersList = () => {
    const [reminders, setReminders] = useState([]) // empty array to start with

    useEffect(() => {
        fetch('http://localhost:4000/reminders')
            .then((response) => {
                return response.json()
            }).then((responseBody) => {
            const remindersFromApi = responseBody.data.reminders
            setReminders(remindersFromApi) // in turn re-renders the component
        })
    }, []) // runs on mount

    return (
        <div className={'remindersList'}>
            {reminders.map((reminder) => <Reminder
                id={reminder._id}
                title={reminder.title}
                done={reminder.done}
            />)}
        </div>
    )
}

export default RemindersList