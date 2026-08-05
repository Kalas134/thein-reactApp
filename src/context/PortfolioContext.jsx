import React, { createContext, useContext, useState } from 'react';

/* ==========================================================
 * Portfolio Context 생성
 *
 * 이 Context를 통해
 * Header, Nav, Home, About, Project 등
 * 모든 컴포넌트에서 선택 정보를 공유한다.
 * ========================================================== */
const PortfolioContext = createContext();

/* ==========================================================
 * Portfolio Provider
 *
 * Context 데이터를 실제로 관리하는 영역
 *
 * 관리 데이터
 *
 * selectedPortfolio
 *  - IT
 *  - GAME
 *
 * selectedRole
 *  - Backend
 *  - Frontend
 *  - Full Stack
 *  - Game Backend
 * ========================================================== */
export function PortfolioProvider({ children }) {

    /* ======================================================
     * 선택된 포트폴리오 종류
     * ====================================================== */
    const [selectedPortfolio, setSelectedPortfolio] = useState("");

    /* ======================================================
     * 선택된 세부 직무
     * ====================================================== */
    const [selectedRole, setSelectedRole] = useState("");

    /* ======================================================
     * 포트폴리오 선택 함수
     *
     * 분야 변경 시 기존 직무 초기화
     * ====================================================== */
    const selectPortfolio = (type) => {
        setSelectedPortfolio(type);

        // 다른 분야 선택 시 직무 초기화
        setSelectedRole("");
    };

    /* ======================================================
     * 직무 선택 함수
     * ====================================================== */
    const selectRole = (role) => {
        setSelectedRole(role);
    };

    /* ======================================================
     * Context로 전달할 데이터
     * ====================================================== */
    const value = {
        // 현재 선택 상태
        selectedPortfolio,
        selectedRole,
        // 상태 변경 함수
        selectPortfolio,
        selectRole
    };

    return (
        <PortfolioContext.Provider value={value}>
            {children}
        </PortfolioContext.Provider>
    );
}

/* ==========================================================
 * Context 사용을 위한 Custom Hook
 *
 * 사용 예:
 *
 * const {
 *     selectedPortfolio,
 *     selectedRole
 * } = usePortfolio();
 *
 * ========================================================== */
export function usePortfolio() {
    return useContext(PortfolioContext);
}