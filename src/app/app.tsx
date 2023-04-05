import { PageHeader } from 'widgets/page-header';

import { AppRouter } from './providers/router';

export const App = () => (
  <>
    <PageHeader />
    <main className="app">
      <AppRouter />
    </main>
  </>
);
