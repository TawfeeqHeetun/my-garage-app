// import Input from '../input/input'

function AppointmentHomeList() {

    return (
        <div className="appointment-list-container w-full">
            <ul className='flex flex-col p-[10px] gap-[10px] h-90 overflow-y-scroll'>

                <li className='flex justify-center'>
                    <div className="appointment-card-holder flex w-[88%] items-center gap-[50px] bg-[rebeccapurple] rounded-[20px] px-[10px] py-[0]">
                        <div className="appointment-card flex w-full justify-between">
                            <div className="time-container flex justify-center items-center">
                                <span className="time">10:00 AM</span>
                            </div>
                            <div className="details-container flex flex-col justify-center items-center">
                                <h3 className="owner-name">John Doe</h3>
                                <p className="vehicle-reg">22 RM 05</p>
                                <p className="vehicle-make">Toyota Corolla <span className="vehicle- year">2005</span></p>
                            </div>
                            <div className="actions-container">
                            </div>
                        </div>
                        <div className="completion-status">
                            {/* <Input label="Completion" type="checkbox" inputID="completionInput"/> */}
                        </div>
                    </div>
                </li>

                <li className='flex justify-center'>
                    <div className="appointment-card-holder flex w-[88%] items-center gap-[50px] bg-[rebeccapurple] rounded-[20px] px-[10px] py-[0]">
                        <div className="appointment-card flex w-full justify-between">
                            <div className="time-container flex justify-center items-center">
                                <span className="time">11:00 AM</span>
                            </div>
                            <div className="details-container flex flex-col justify-center items-center">
                                <h3 className="owner-name">Gael Him</h3>
                                <p className="vehicle-reg">185 AZ 14</p>
                                <p className="vehicle-make">Honda Fit<span className="vehicle- year">2014</span></p>
                            </div>
                            <div className="actions-container">
                            </div>
                        </div>
                        <div className="completion-status">
                            {/* <Input label="Completion" type="checkbox" inputID="completionInput"/> */}
                        </div>
                    </div>
                </li>

                <li className='flex justify-center'>
                    <div className="appointment-card-holder flex w-[88%] items-center gap-[50px] bg-[rebeccapurple] rounded-[20px] px-[10px] py-[0]">
                        <div className="appointment-card flex w-full justify-between">
                            <div className="time-container flex justify-center items-center">
                                <span className="time">14:00 PM</span>
                            </div>
                            <div className="details-container flex flex-col justify-center items-center">
                                <h3 className="owner-name">Kala Soulma</h3>
                                <p className="vehicle-reg">1452 Dz 16</p>
                                <p className="vehicle-make">Toyota Aqua <span className="vehicle- year">2016</span></p>
                            </div>
                            <div className="actions-container">
                            </div>
                        </div>
                        <div className="completion-status">
                            {/* <Input label="Completion" type="checkbox" inputID="completionInput"/> */}
                        </div>
                    </div>
                </li>
                
                <li className='flex justify-center'>
                    <div className="appointment-card-holder flex w-[88%] items-center gap-[50px] bg-[rebeccapurple] rounded-[20px] px-[10px] py-[0]">
                        <div className="appointment-card flex w-full justify-between">
                            <div className="time-container flex justify-center items-center">
                                <span className="time">15:30 PM</span>
                            </div>
                            <div className="details-container flex flex-col justify-center items-center">
                                <h3 className="owner-name">Kreig</h3>
                                <p className="vehicle-reg">G185</p>
                                <p className="vehicle-make">Toyota Rush<span className="vehicle- year">2023</span></p>
                            </div>
                            <div className="actions-container">
                            </div>
                        </div>
                        <div className="completion-status">
                            {/* <Input label="Completion" type="checkbox" inputID="completionInput"/> */}
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default AppointmentHomeList;