import api from './api';

const findByCategory = async (categoryId) => {
	try {
		//Alterar categoryId por path após implementar back-end
		const response = await api.get(`/products?categoryId=${categoryId}`);
		return response.data;
	}
	catch (error) {
		return Promise.reject(error);
	}
};

const searchFromCategory = async (categoryId, term) => {
	try {
		//Alterar categoryId por path após implementar back-end
		const response = await api.get(`/products?categoryId=${categoryId}&name_like=${term}`);
		return response.data;
	}
	catch (error) {
		return Promise.reject(error);
	}
};

export const productsService = {
	findByCategory,
	searchFromCategory
}; 
