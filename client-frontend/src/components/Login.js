import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();
    
    const setAuthToken = (authToken) => {
        cookies.set('authToken', authToken, { path: '/' });
        navigate('/', { replace: true });
    };
    
    const handleLoginToken = async(username, password) => {
        const response = await fetch('localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password}),
        });

        if (!response.ok) {
            throw new Error('Network was not ok!')
        }

        const data = await response.json();
        return data;
    };

    const handleLogin = async(username, password) => {
        if (!username || !password) {
            return;
        }
        
        try {
            const token = await handleLoginToken(username, password);

            if (!token) {
                console.error('No token!')
                return;
            }

            setAuthToken(token);
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='wrapper'>
            <div className='form-box login'>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='input-box'>
                        <span className='icon'>
                        <ion-icon name="person-outline"></ion-icon>
                        </span>
                        <input type='username' required/>
                        <label>Username</label>
                    </div>
                    <div className='input-box'>
                        <span className='icon'>
                        <ion-icon name="key-outline"></ion-icon>
                        </span>
                        <input type='password' required/>
                        <label>Password</label>
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox'/>
                            Remember me
                        </label>
                        <a href='/settings'>Forgot password?</a>
                    </div>
                    <button type='sumbit' className='btn'>Sign in</button>
                    <div className='login-register'>
                        <p>
                            Don't have an account?
                            <a href='/register' className='register-link'>Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;