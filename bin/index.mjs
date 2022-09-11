import * as expressions from "../lib/expressions.mjs";
import * as defaultOptions from "../lib/defaultOptions.mjs";

const renderError = (errorMsg) => {
	console.error(`RegexBuddy: ` + errorMsg);
	return false;
}

const validateEmail = (emailAddress) => {
	let emailValid = false;
	if (!emailAddress || emailAddress === undefined) renderError(`No email address provided`);
	if (emailAddress.constructor.name !== 'String') renderError(`Invalid input type for email. Expected a string, but got ${emailAddress.constructor.name}`);
	!expressions.email.base.exec(emailAddress) ? renderError(`Invalid email address: ${emailAddress}`) : emailValid = true;
	return emailValid;
}

const validatePassword = async (password, options) => {
	console.log("options", options);
	if (!password || password === undefined) await renderError(`No password provided`);
	if (password.length < options.minLength) await renderError(`Password must be at least ${options.minLength} characters long`);
	const pwTest = expressions.password(options);
	if (!pwTest.hasNumber.test(password)) await renderError(`Password must contain at least one number`);
	return true;
}

export const email = (emailAddress) => {
	return {
		validate: () => validateEmail(emailAddress)
	};
}

export const password = (password) => {
	return {
		validate: (options) => {
			if (!options) options = defaultOptions.password();
			return validatePassword(password, options);
		}
	};
}