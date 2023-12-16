import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useRedirect(isSuccess: boolean, location: string) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(location);
    }
  });
}
