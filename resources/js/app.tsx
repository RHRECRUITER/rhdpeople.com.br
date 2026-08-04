import { createRoot } from 'react-dom/client';
import Landing from './Landing';

// Ponto de entrada. O Blade entrega uma <div id="app"> vazia com os dados que
// só o servidor sabe (URL da API, token CSRF); o React monta a página dentro.
const root = document.getElementById('app');

if (root) {
  const { action = '', csrf = '' } = root.dataset;

  createRoot(root).render(<Landing action={action} csrf={csrf} />);
}
