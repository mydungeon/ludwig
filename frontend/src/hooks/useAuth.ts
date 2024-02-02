import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { userApi } from "src/redux/api/user.api";

export default function useAuth(allowedRoles?: string) {
  const location = useLocation();
  const [cookies] = useCookies(["logged_in"]);
  const { logged_in } = cookies;
  const { isLoading } = userApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });
  const user = userApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });
  const { roles } = user || {};
  const isLoggedInUser = logged_in && user;
  const isAllowed = roles && roles.includes(allowedRoles!);
  const isAuthorized = isLoggedInUser && isAllowed;
  const isUnauthorized = isLoggedInUser && !isAllowed;
  const isLoggedOut = !logged_in;

  return {
    location,
    isLoading,
    isAuthorized,
    isUnauthorized,
    isLoggedOut,
    isLoggedInUser,
  };
}
