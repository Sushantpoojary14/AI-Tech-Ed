import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter ,HashRouter} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainContext } from './Context/AppContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainUserContext } from './Context/UserContext';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainContext>
        <MainUserContext>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MainUserContext>
      </MainContext>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  </React.StrictMode>
);


