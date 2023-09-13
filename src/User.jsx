import { mockEmployees } from './Home';

const User = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {mockEmployees.map((item) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User