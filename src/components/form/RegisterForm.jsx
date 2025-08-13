import Input from '../input/input'
import Button from '../button/Button'

function RegisterForm() {

  function handleRegister(e) {
    e.preventDefault();
    console.log('You clicked register.');
  }

    return (
    <>
    <div className="registerForm mx-[auto] my-[0] z-2 w-full max-w-187 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
        <Input label="Username" type="text" index={0}/>
        <Input label="Email" type="email" index={1}/>
        <Input label="Password" type="password" index={2}/>    
        <div className="flex flex-col w-full mt-5 mb-5 items-center justify-center">
          <Button text="Register" color="sky-500" tailwindClasses="h-10 max-w-25 w-full border-1 border-black rounded-lg text-white font-bold p-1" action={handleRegister} />  
        </div>
    </div>
    </>
    );
}

export default RegisterForm