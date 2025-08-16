// import Input from '../input/input'
import Button from '../button/Button' 

function LoginForm() {

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }

    return (
    <>
    <div className="loginForm mx-[auto] my-[0] z-2 w-full max-w-187 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
      <form className='w-full' action="">
        {/* <Input label="Username" type="text" inputID="completionInput"/>
        <Input label="Password" type="password" inputID="completionInput"/>     */}
        <div className="flex flex-col w-full mt-5 mb-5 items-center justify-center">
          <Button text="Login" color="sky-500" tailwindClasses="h-10 max-w-25 w-full border-1 border-black rounded-lg text-white font-bold p-1" action={handleSubmit} />  
        </div>
      </form>
    </div>
    </>
    );
}

export default LoginForm