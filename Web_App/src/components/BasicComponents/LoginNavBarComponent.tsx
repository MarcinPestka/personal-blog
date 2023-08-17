import { useEffect, useState } from "react";
import { userStore } from "../../store/userStore";
import { Observer } from "mobx-react-lite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function LoginNavBarComponent() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    userStore.GetUserDetails();
  }, []);

  return (
    <Observer>
      {() => (
        <>
          {userStore.loggedIn && userStore.user ? (
            <>
              <AccountCircleIcon />
              <a
                href="/myAccount"
                onClick={() => setHash(hash)}
                className={hash === "/login" || hash === "/myAccount" ? "activeNavItem" : ""}>
                {userStore.user.firstName} {userStore.user.lastName}
              </a>
            </>
          ) : (
            <>
              <a
                href="/login"
                onClick={() => setHash(hash)}
                className={hash === "/login" ? "activeNavItem" : ""}>
                Zaloguj
              </a>
            </>
          )}
        </>
      )}
    </Observer>
  );
}
