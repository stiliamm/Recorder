import { useNavigate } from 'react-router-dom';
import App from '../App';

const Register = ({showRegisterForm}) => {
    const navigate = useNavigate();

    const handleRegistration = async(username, firstName, lastName, password) => {
        const response = await fetch('localhost:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, firstName, lastName, password}),
        });

        if (!response.ok) {
            throw new Error('Network was not ok!');
        }

        const data = await response.json();
        navigate('/login')
        return data;
    };

    return (
        <div className={`register-container ${showRegisterForm ? 'show' : ''}`}>
            <span className='close-icon'>
            <ion-icon name="outline-close"></ion-icon>
            </span>
            <div className='form-box-register'>
                <h2>Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className='input-box-register'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='username' required/>
                        <label>Username</label>
                    </div>
                    <div className='input-box-register'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='text' required/>
                        <label>First Name</label>
                    </div>
                    <div className='input-box-register'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='text' required/>
                        <label>Last Name</label>
                    </div>
                    <div className='input-box-register'>
                        <span className='icon'>
                        <ion-icon name="key-outline"></ion-icon>
                        </span>
                        <input type='password' required/>
                        <label>Password</label>
                    </div>
                    <button type='submit' className='btn'>Sign in</button>
                </form>
            </div>
        </div>
    )
}
export default Register;