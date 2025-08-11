import { useState } from "react"
import Sidenav from "./sidenav"
import NewDashboard from "../../pages/Dashboard/NewDashboard"

function Dashboard () {
    const [activeTab, setActiveTab] = useState('dashboard')
    return(
        <div>
            <div className="w-full flex justify-between">
                <Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="text-black w-full">
                    {activeTab == "dashboard" && <NewDashboard />} 
                    {activeTab == "request" && 'REQUESTS'}
                    {activeTab == "notification" && 'NOTIFICATION'}
                </div>
            </div>
        </div>
    )
}

export default Dashboard