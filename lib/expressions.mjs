export const email = {
	base: new RegExp(/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/)
}

export const password = (options) => {
	const minLength = options.minLength || 8;
	return {
		minLength: minLength,
		hasNumber: new RegExp(/(?=(.*[0-9]))/),
		hasSpecialChar: new RegExp(/(?=.*[!@#$%^&*])/),
		hasUpperCase: new RegExp(/(?=.*[A-Z])/),
		hasLowerCase: new RegExp(/(?=.*[a-z])/),
		base: new RegExp(/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/),
	}
}