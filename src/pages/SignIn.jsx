import LoginForm from '../components/form/LoginForm' 

export default function Signin() {
    return (
        <div className="signin flex flex-col justify-center items-center w-full h-full">
            <h1>Sign in</h1>
            <LoginForm />
        </div>
    )
}