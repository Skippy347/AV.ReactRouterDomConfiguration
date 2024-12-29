import { AppRoutes } from "../../../shared/configuration/routes/types/AppRoutes";
import { MainPage } from "../../../pages/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage/ui/NotFoundPage";
import { ProfileDetailsPage } from "../../../pages/ProfileDetailsPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { RouteProps } from "react-router-dom";

import {
  getRouteMain,
  getRouteProfileDetails,
  getRouteProfiles,
} from "../../../shared/configuration/routes/routes";

export const routerConfiguration: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN_PAGE]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.PROFILE_PAGE]: {
    path: getRouteProfiles(),
    element: <ProfilePage />,
  },
  [AppRoutes.PROFILE_DETAILS_PAGE]: {
    path: getRouteProfileDetails(":id"),
    element: <ProfileDetailsPage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: "*",
    element: <NotFoundPage />,
  },
};
