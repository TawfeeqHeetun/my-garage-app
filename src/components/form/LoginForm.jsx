import Input from '../input/input'
import Button from '../button/Button'

function LoginForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

    return (
    <>
    <div className="loginForm z-2 w-full max-w-187 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        <Input label="Username" type="text" index={0}/>
        <Input label="Password" type="password" index={1}/>    
        <Button text="Login" color="sky-500" action={handleSubmit} />  
    </div>
    </>
    );
}

export default LoginForm