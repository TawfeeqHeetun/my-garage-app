import Header from '../components/header/Header' 
import RegisterForm from '../components/form/RegisterForm' 

export default function Register() {
    return (
        <div className="register w-full h-full">
            <Header />
            <h1>Register</h1>
            <RegisterForm />
        </div>
    )
}