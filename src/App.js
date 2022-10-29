import Navbar from "./Navbar";
import RemindersList from "./RemindersListNewAndWorse";
import AddReminder from "./AddReminder";
import Layout from "./Layout";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useState} from "react"
import FontContext from "./FontContext"
import './App.css'
import RemindersListNewAndWorse from "./RemindersListNewAndWorse";

const App = () => {
    const [currentFont, setFont] = useState('font')

    return (
        <FontContext.Provider value={
            {
                currentFont: currentFont,
                setFont: setFont
            }
        }>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="reminders" element={<RemindersListNewAndWorse />} />
                        <Route path="addReminder" element={<AddReminder />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </FontContext.Provider>
    )
}

export default App;