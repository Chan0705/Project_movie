// PrivateRoute.js
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../zustand/authStore';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuthStore();
  // 로그인 안 되어 있으면 로그인 페이지로
  return isLoggedIn ? children : <Navigate to="/login" />;
}
