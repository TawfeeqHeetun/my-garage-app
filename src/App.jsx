import './App.css'
import LoginForm from './components/form/LoginForm'
import RegisterForm from './components/form/RegisterForm'
import Overlay from './components/overlay/Overlay'
import Header from './components/header/Header'
import SideNav from './components/sideNav/SideNav'
import DateTime from './components/date-time-widget/DateTime'
import AppointmentHomeList from './components/appointment-home-list/AppointmentHomeList'

function App() { 
   
  return (
    <> 
      {/* <Overlay /> */}
      {/* <LoginForm /> */}
      <Header />
      <div className="body-wrapper flex w-full h-full">
        <SideNav />
        <div className="main-content w-full h-full">
          <DateTime />
          <AppointmentHomeList /> 
        </div>
      </div>
      {/* <RegisterForm /> */}
    </>
  )
}

export default App
