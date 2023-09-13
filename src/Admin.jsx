import { useState } from 'react';
import { mockEmployees } from './Home';

const shoutTest = () => {
    console.log({mockEmployees})
}

const admin = () => {

    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [position, setPosition] = useState();

    return (
        <div>
            <div>
                <h4>Create User Here</h4>
                <form action="">
                    <input 
                        type="text"
                        name="firstname"
                        id="firstname"
                        value={firstname}
                        placeholder='Name'
                        onChange={(e)=>
                            (setFirstname(e.target.value)
                        )}
                    />
                                        <input 
                        type="text"
                        name="lastname"
                        id="lastname"
                        value={lastname}
                        placeholder='Last name'
                        onChange={(e)=>
                            (setLastname(e.target.value)
                        )}
                    />
                    <input 
                        type="text"
                        name="position"
                        id="position"
                        value={position}
                        placeholder='position'
                        onChange={(e)=>
                            (setPosition(e.target.value)
                        )}
                    />
                    <button type='button' id='buttonSave'>Save</button>
                    <button type='button' onClick={
                        () => shoutTest()
                    }>Test</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmployees.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                        <td>Delete</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default admin