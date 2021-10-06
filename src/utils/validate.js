
import validator from 'validator';
export const CONTACT_US_VALIDATE = ({ name, email, message }) => {
    let response = {
        success: false,
        name: "",
        email: "",
        message: "",
    }
    if (validator.isEmpty(name)) {
        response.name = "Please fill name";
        return response
    } else if (validator.isEmpty(email)) {
        response.email = "Please fill email";
        return response
    } else if (!validator.isEmail(name)) {
        response.email = "Please fill valid email";
        return response
    } else if (validator.isEmpty(message)) {
        response.message = "Please fill messages";
        return response
    }
    response.success = true;
    return response;

}