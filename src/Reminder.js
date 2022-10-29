import FontContext from "./FontContext"

const Reminder = (props) => {
    const handleClick = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                done: !props.done
            })
        }
        const requestUrl = 'http://localhost:4000/reminders/' + props.id
        fetch(requestUrl, requestOptions)
    }

    const clickDelete = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
                id: props.id
            })
        }
        const requestUrl = 'http://localhost:4000/reminders/' + props.id
        fetch(requestUrl, requestOptions)
    }

    return (
        <FontContext.Consumer>
            { contextData => (
                <div className={contextData.currentFont}>
                    <input type="checkbox" onClick={handleClick} name={props.id} defaultChecked={props.done}/>
                    <label for={props.id}>{props.title}</label>
                    <button type={"submit"} onClick={clickDelete}>delete me</button>
                </div>
            )}
        </FontContext.Consumer>
    )
}

export default Reminder