const convertToReal = (value) => {
	return `R$ ${parseFloat(value).toFixed(2).replace('.', ',')}`;
};

export {
	convertToReal
};