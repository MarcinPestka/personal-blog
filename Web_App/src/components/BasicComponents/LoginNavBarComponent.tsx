import { useEffect, useState } from "react";
import { userStore } from "../../store/userStore";
import { Observer } from "mobx-react-lite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export function LoginNavBarComponent() {
  const [hash, setHash] = useState("");
  const store = userStore;

  useEffect(() => {
    setHash(window.location.pathname);
  }, [window.location.pathname]);

  useEffect(() => {
    store.GetUserDetails();
  }, []);

  return (
    <Observer>
      {() => (
        <>
          {store.loggedIn && store.user ? (
            <>
              <AccountCircleIcon />
              <a
                href="/myAccount"
                onClick={() => setHash(hash)}
                className={hash === "/login" || hash === "/myAccount" ? "activeNavItem" : ""}>
                {store.user.firstName} {store.user.lastName}
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
