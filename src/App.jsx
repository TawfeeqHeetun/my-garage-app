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

    {/* Overlay component starts */}   
      <Overlay />
    {/* Overlay component ends */}

    {/* Header component starts */}
      <Header />
    {/* Header component ends */}
    
    {/* LoginForm starts */}
      <div className="body-wrapper flex w-full h-full justify-center items-center">
        <LoginForm />
      </div>
    {/* LoginForm ends */}

    {/* home content with nav date widget and appointment list starts */}
      <div className="body-wrapper flex w-full h-full">
        <SideNav />
        <div className="main-content w-full h-full">
          <DateTime />
          <AppointmentHomeList /> 
        </div>
      </div>
    {/* home content with nav date widget and appointment list ends */}

    {/* RegisterForm starts */}
      <div className="body-wrapper flex w-full h-full justify-center items-center">
        <RegisterForm />
      </div>
    {/* RegisterForm ends */}
    </>
  )
}

export default App
