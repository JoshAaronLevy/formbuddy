export const password = (options) => {
	return {
		minLength: options.minLength || 8,
		requireNumber: options.requireNumber || true,
		requireSpecialCharacters: options.requireSpecialCharacters || true,
		requireUpperCase: options.requireUpperCase || true,
		requireLowerCase: options.requireLowerCase || true
	}
}