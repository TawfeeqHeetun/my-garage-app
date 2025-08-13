import Header from '../components/header/Header'
import SideNav from '../components/sideNav/SideNav'
import AppointmentHomeList from '../components/appointment-home-list/AppointmentHomeList'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <div className="main-content flex flex-row h-full w-full">
                <SideNav />
                <AppointmentHomeList />
            </div>
        </div>
    )
}