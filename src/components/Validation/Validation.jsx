const validation = (userData) => {
    const errors = {};

    if (!userData.email) {
        errors.email = 'You should input an email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
        errors.email = 'Invalid email';
    } else if (userData.email.length > 35) {
        errors.email = 'Please enter a valid email';
    }

    if (!userData.password) {
        errors.password = 'You should input a password';
    } else if (!/\d/.test(userData.password)) {
        errors.password = 'Password should contain at least one number';
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Password should be between 6 and 10 characters';
    }

    return errors;
}

export default validation;