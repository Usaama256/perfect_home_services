import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserPrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return user ? children : <Navigate to="/auth/cl/login" />;
};

export const AdminPrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.type === "admin") {
      return children;
    } else {
      return <Navigate to="/auth/ad/login" />;
    }
  } else {
    return <Navigate to="/auth/ad/login" />;
  }
};

export const SpPrivateRoutes = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.type === "sp") {
      return children;
    } else {
      return <Navigate to="/auth/sp/login" />;
    }
  } else {
    return <Navigate to="/auth/sp/login" />;
  }
};

export const UserAuthPagesGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  return user ? <Navigate to="/" /> : children;
};

export const SPAuthPagesGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.type === "sp") {
      return <Navigate to="/SPdash/home" />;
    } else {
      return children;
    }
  } else {
    return children;
  }
};

export const AdminAuthPagesGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (user.type === "admin") {
      return <Navigate to="/admin/dash/home" />;
    } else {
      return children;
    }
  } else {
    return children;
  }
};

export const SPApprovalCheckGuard = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  if (user) {
    if (parseInt(user.approved, 10) === 1) {
      return children;
    } else {
      return <Navigate to="/SPdash/not_approved" />;
    }
  } else {
    return <Navigate to="/" />;
  }
};
