import * as expressions from "../lib/expressions.mjs";
import * as defaultOptions from "../lib/defaultOptions.mjs";

const renderError = (errorMsg) => {
	return console.error(`RegexBuddy: ` + errorMsg);
}

const validateEmail = (emailAddress) => {
	let emailValid = false;
	if (!emailAddress || emailAddress === undefined) renderError(`No email address provided`);
	if (emailAddress.constructor.name !== 'String') renderError(`Invalid input type for email. Expected a string, but got ${emailAddress.constructor.name}`);
	!expressions.email.base.exec(emailAddress) ? renderError(`Invalid email address: ${emailAddress}`) : emailValid = true;
	return emailValid;
}

const validatePassword = (password, options) => {
	if (!password || password === undefined) renderError(`No password provided`);
	let passwordValid = false;
	const pwTest = expressions.password(options);
	console.log("options", options);
	!pwTest.hasNumber.test(password) ? renderError(`Password must contain at least one number`) : passwordValid = true;
	!pwTest.base.exec(password) ? renderError(`Invalid password: ${password}`) : passwordValid = true;
	return passwordValid;
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