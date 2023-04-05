import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { App } from 'app';
import { ErrorBoundary } from 'app/providers/error-boundary';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'shared/styles/index.scss';
import { PageLoader } from 'widgets/page-loader';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <QueryClientProvider client={queryClient}>
            {/* <ReactQueryDevtools /> */}
            <App />
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
