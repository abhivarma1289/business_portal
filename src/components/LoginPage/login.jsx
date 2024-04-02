import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './login.scss'; // Import SCSS file for styling

// Define the Login component
const Login = () => {
    const handleSignup = () => {
        window.location.href = '/signup';
};
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define function to handle form submission
    const onSubmit = (data) => {
        // Retrieve existing users or initialize to an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user with the entered email
        const user = existingUsers.find(user => user.email === data.email);

        // Check if a user with the entered email exists and if the password matches
        if (user && user.password === data.password) {
            console.log('Login successful!'); // Log message for successful login
            window.location.href = '/home'; // Redirect to home page upon successful login
        } else {
            alert('Login failed! Invalid credentials!'); // Show alert for failed login
            console.log('Invalid email or password'); // Log message for failed login
            console.log('password: ' + data.password); // Log entered password
            console.log('stored email', user?.email); // Log stored email for debugging
            console.log('email', data.email); // Log entered email for debugging
        }
    };

    // Render the Login form
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    {/* Render email input field with error handling */}
                    <TextField
                        {...register('email', { required: true })}
                        label="Email"
                        variant="outlined"
                        error={errors.email ? true : false}
                        helperText={errors.email ? 'Email is required' : ''}
                    />
                </div>
                <div className="form-group">
                    {/* Render password input field with error handling */}
                    <TextField
                        {...register('password', { required: true })}
                        label="Password"
                        variant="outlined"
                        type="password"
                        error={errors.password ? true : false}
                        helperText={errors.password ? 'Password is required' : ''}
                    />
                </div>
                {/* Render submit button */}
                <Button type="submit" variant="contained" color="primary">Login</Button>
                <p>don't have an Account ? Signup here by clicking below button</p>
                {/* <Button type="submit" variant="contained" color="primary">signup</Button> */}
                <button type="button" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    );
};

// Export the Login component
export default Login;