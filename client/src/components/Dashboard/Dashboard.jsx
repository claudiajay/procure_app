import { useState } from "react"
import Sidenav from "./sidenav"

function Dashboard () {
    const [activeTab, setActiveTab] = useState('dashboard')
    return(
        <div>
            <div className="flex gap-1.5">
                <Sidenav activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="text-black">
                    {activeTab == "dashboard" && 'DASHBOARD'}
                    {activeTab == "request" && 'REQUESTS'}
                    {activeTab == "notification" && 'NOTIFICATION'}
                </div>
            </div>
        </div>
    )
}

export default Dashboard