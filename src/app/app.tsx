import { PageHeader } from 'widgets/page-header';

import { AppRouter } from './providers/router';

export const App = () => (
  <div className="app">
    <PageHeader />
    <AppRouter />
  </div>
);
