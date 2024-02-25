import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { profileApi } from "src/redux/api/profile.api";

export default function useAuth(allowedRoles?: string) {
  const location = useLocation();
  const [cookies] = useCookies(["logged_in"]);
  const [idCookie, setIdCookie] = useCookies(["_id"]);
  const { logged_in } = cookies;
  const { isLoading } = profileApi.endpoints.getMe.useQuery(null, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });
  const user = profileApi.endpoints.getMe.useQueryState(null, {
    selectFromResult: ({ data }) => data,
  });
  const { _id, roles } = user || {};
  const isLoggedInUser = logged_in && user;
  const isAllowed = roles && roles.includes(allowedRoles!);
  const isAuthorized = isLoggedInUser && isAllowed;
  const isUnauthorized = isLoggedInUser && !isAllowed;
  const isLoggedOut = !logged_in;
  function userIdCookie() {
    if (!idCookie._id) {
      setIdCookie("_id", _id);
    }
    return idCookie;
  }
  return {
    isLoading,
    isAuthorized,
    isUnauthorized,
    isLoggedOut,
    isLoggedInUser,
    location,
    userIdCookie,
  };
}
