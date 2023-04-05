export const AppRoutes = {
  MAIN: 'main',
  CHARACTER_INFO: 'character-info',

  // last
  NOT_FOUND: 'not-found',
} as const;

export type TAppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CHARACTER_INFO]: '/character-info/:id',

  // last
  [AppRoutes.NOT_FOUND]: '*',
};
