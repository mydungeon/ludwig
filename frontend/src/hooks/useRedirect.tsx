import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirect(isSuccess: boolean, to: string) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(to);
    }
  }, [isSuccess, navigate, to]);
}
