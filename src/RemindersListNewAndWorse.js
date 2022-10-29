import React from "react"
import Reminder from "./Reminder"

class RemindersListNewAndWorse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reminders: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/reminders')
            .then(response => response.json())
            .then(responseBody => {
                this.setState({
                    reminders: responseBody.data.reminders
                })    return (

            })
    }

    render() {
             <div className={'remindersList'}>
                {this.state.reminders.map((reminder) => <Reminder
                    id={reminder._id}
                    title={reminder.title}
                    done={reminder.done}
                />)}
            </div>
        )
    }
}

export default RemindersListNewAndWorse