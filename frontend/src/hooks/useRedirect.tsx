import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function useRedirect(isSuccess: boolean, to: string) {
  const navigate = useNavigate();
  const location = useLocation();
  to = ((location.state as any)?.from.pathname as string) || to;

  useEffect(() => {
    if (isSuccess) {
      navigate(to);
    }
  }, [isSuccess, navigate, to]);
}
