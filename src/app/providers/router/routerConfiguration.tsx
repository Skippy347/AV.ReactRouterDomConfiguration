import { RouteProps } from "react-router-dom";
import { AppRoutes } from "../../../shared/configuration/routes/types/AppRoutes";
import {
  getRouteMain,
  getRouteProfileDetails,
  getRouteProfiles,
} from "../../../shared/configuration/routes/routes";
import { MainPage } from "../../../pages/MainPage";
import { NotFoundPage } from "../../../pages/NotFoundPage/ui/NotFoundPage";
import { ProfilePage } from "../../../pages/ProfilePage";
import { ProfileDetailsPage } from "../../../pages/ProfileDetailsPage";

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
