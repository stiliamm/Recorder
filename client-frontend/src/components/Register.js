import { useNavigate } from 'react-router-dom';


const Register = () => {
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
        <div className='wrapper'>
            <span className='icon-close'>
            <ion-icon name="close-outline"></ion-icon>
            </span>
            <div className='form-box login'>
                <h2>Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className='input-box'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='username' required/>
                        <label>Username</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='username' required/>
                        <label>First Name</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='username' required/>
                        <label>Last Name</label>
                    </div>
                    <div className='input-box'>
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