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
        <form onSubmit={handleLogin}>
            LOGIN
            {/* TODO: IMPLEMENT THE LOGIN FORM */}
        </form>
    );
}
export default Login;