import { useEffect } from 'react';
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  useEffect(() => {
    const initializeGuestSession = async () => {
      try {
        // O axios vem por import dinamico: ele so e usado depois da montagem, entao sai
        // do bundle inicial e nao atrasa o primeiro paint
        const { default: axios } = await import('axios');
        // apontando URL base e força o tráfego de credenciais
        await axios.get(`${import.meta.env.VITE_SANCTUM_URL}/sanctum/csrf-cookie`, {
          withCredentials: true,
        });
        //Persistir somente para debug
        console.log('✅ Sessão de visitante e CSRF inicializados.');
      } catch (error) {
        console.error('❌ Falha ao inicializar proteção CSRF', error);
      }
    };

    initializeGuestSession();
  }, []);

  return <AppRoutes />;
}

export default App;
