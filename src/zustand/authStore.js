// 상태 저장소를 만드는 함수
import { create } from 'zustand';

// 전역 스토어(저장소) 생성 → 이 함수(useAuthStore)를 컴포넌트에서 훅처럼 호출
//? create((set) => ({ ... }))
//? → 전역 상태와 그 상태를 바꾸는 함수들을 한 곳에 정의합니다.
//? useAuthStore()
//? → 컴포넌트에서 호출 시 현재 전역 상태를 읽고, 액션도 가져올 수 있습니다.

export const useAuthStore = create((set) => ({
  // ① 전역 상태값들
  isLoggedIn: false, // 로그인 여부 (기본: 로그아웃 상태 = false)
  token: null, // 서버가 준 인증 토큰(옵션)

  // ② 상태를 바꾸는 함수들(액션)
  // login(token) 호출 시 → 로그인 상태 true + 토큰 저장
  login: (token) => set({ isLoggedIn: true, token }),

  // logout() 호출 시 → 로그인 상태 false + 토큰 제거
  //* 로그아웃 버튼 클릭하면 로그인상태가 false, token이 null로 변경
  logout: () =>
    set(
      { isLoggedIn: false, token: null },
      alert('정상적으로 로그아웃 되었습니다.') //* 로그아웃 여부 확인 가능 한 alert 추가
    ),
}));

// export default useAuthStore;
