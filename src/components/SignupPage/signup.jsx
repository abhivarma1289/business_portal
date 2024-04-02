import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './signup.scss'; // Import SCSS file for styling

// Define the Signup component
const Signup = () => {

    const handleLogin = () => {
                window.location.href = '/';
    };
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Define function to handle form submission
    const onSubmit = (data) => {
        // Retrieve existing users or initialize to an empty array
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the email is already registered
        if (existingUsers.find(user => user.email === data.email)) {
            alert('Email already registered'); // Show alert if email is already registered
            return;
        }

        // Add new user to the list of users
        const newUser = { email: data.email, password: data.password };
        const updatedUsers = [...existingUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        // Redirect to home page upon successful sign-up
        window.location.href = '/';
    };

    // Render the Signup form
    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
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
                <Button type="submit" variant="contained" color="primary">Sign Up</Button>
            <p>Already have an account ?</p>
            {/* <Button type="submit" variant="contained" color="primary">Login</Button> */}
            <button type="button" onClick={handleLogin}>Login</button>

            </form>
        </div>
    );
};

// Export the Signup component
export default Signup;

