import axios, { AxiosError } from 'axios';

// Instância global configurada para o Sanctum Stateful
export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

    withCredentials: true,
});
// Interceptador de Resposta: Tratamento Global de Exceções
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        // Se o backend rejeitar com 419 ou 401, a sessão do visitante foi perdida ou bloqueada
        if (error.response && (error.response.status === 419 || error.response.status === 401)) {
            console.warn('Sessão de visitante inválida ou token invalido.');
        }
        return Promise.reject(error);
    }
);