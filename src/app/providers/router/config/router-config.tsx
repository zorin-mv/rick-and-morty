import { CharacterInfoPageAsync } from 'pages/character-info-page';
import { CharacterListPage } from 'pages/character-list-page';
import { NotFoundPage } from 'pages/not-found-page';
import { type RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath, type TAppRoutes } from 'shared/constant/app-routes';

export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <CharacterListPage />,
  },
  [AppRoutes.CHARACTER_INFO]: {
    path: RoutePath['character-info'],
    element: <CharacterInfoPageAsync />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath['not-found'],
    element: <NotFoundPage />,
  },
};
