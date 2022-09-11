export const password = () => {
	return {
		minLength: 8,
		hasSpecialCharacters: true,
		hasUpperCase: true,
		hasLowerCase: true,
		hasNumber: true,
	}
}