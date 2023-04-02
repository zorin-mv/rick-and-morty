export const AppRoutes = {
  MAIN: 'main',

  // last
  NOT_FOUND: 'not-found',
} as const;

export type TAppRoutes = ValueOf<typeof AppRoutes>;

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',

  // last
  [AppRoutes.NOT_FOUND]: '*',
};
