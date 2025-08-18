import { useState } from "react"
import Sidenav from "./sidenav"
import NewDashboard from "../../pages/Dashboard/NewDashboard"
import MyRequests from "../../pages/MakeRequest"

function Dashboard () {
    const [activeTab, setActiveTab] = useState('dashboard')
    return(
        <div>
            <div className="w-full flex justify-between">
                <Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="text-black w-full">
                    {activeTab == "dashboard" && <NewDashboard />} 
                    {activeTab == "request" && <MyRequests />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard