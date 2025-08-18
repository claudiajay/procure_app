
import * as Lucide from "lucide-react";

function Sidenav({activeTab, setActiveTab}) {

    const navlinks = [
        {
        id: 1,
        icon: "LayoutGrid",
        label: "Dashboard",
        link: "dashboard",
        },
        {
        id: 2,
        icon: "Edit",
        label: "My Requests",
        link: "request",
        },
    ];

    return (
        <div className="w-[250px] h-screen bg-black text-white">
        <aside className="flex flex-col justify-between h-full">
            <div className="flex justify-center items-center bg-white text-black font-bold text-lg py-14">
                Procurement Management
            </div>

            <nav className="flex-1 mt-6 p-2">
                <ul className="flex flex-col gap-3">
                    {navlinks.map((link) => {
                    const Icon = Lucide[link.icon];
                    const isActive = activeTab === link.link;
                    return (
                        <li key={link.id}>
                            <div className="cursor-pointer" onClick={() => setActiveTab(link.link)}>
                                <div
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition ${
                                        isActive
                                        ? "bg-blue-700 text-white font-semibold"
                                        : "hover:bg-white/10"
                                    }`}
                                >
                                    <Icon size={18} />
                                    <span>{link.label}</span>
                                </div>
                            </div>
                        </li>
                    );
                    })}
                </ul>
            </nav>

            <div className="flex items-center gap-3 p-3 bg-white/10 rounded">
                {/* <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                /> */}
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-300">Employee</p>
                </div>
                </div>
        </aside>
        </div>
    );
    }

export default Sidenav;
