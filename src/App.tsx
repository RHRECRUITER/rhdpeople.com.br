import { AppRoutes } from './routes/AppRoutes';
import { useEffect } from 'react';
import axios from 'axios';

export function App() {
  useEffect(() => {
    const initializeGuestSession = async () => {
      try {
        // apontando URL base e força o tráfego de credenciais
        await axios.get(`${import.meta.env.VITE_SANCTUM_URL}/sanctum/csrf-cookie`, {
          withCredentials: true
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