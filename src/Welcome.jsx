import React from 'react';
import './css/Welcome.css';

import { usePortfolio } from './context/PortfolioContext';

function Welcome() {
    /* ==========================================================
     * 선택된 포트폴리오 종류
     *
     * ""     : 선택되지 않음
     * "IT"   : General IT
     * "GAME" : Game Service
     * ========================================================== */
    /* ==========================================================
     * 선택된 세부 직무
     *
     * ""              : 선택되지 않음
     * "Backend"       : IT Backend
     * "Frontend"      : IT Frontend
     * "Full Stack"    : IT Full Stack
     * "Game Backend"  : Game Backend
     * ========================================================== */
    const {
        selectedPortfolio,
        selectedRole,
        selectPortfolio,
        selectRole
    } = usePortfolio();


    /* ==========================================================
     * 상위 포트폴리오 목록
     *
     * id        : 상태 저장용 값
     * title     : 화면 출력 제목
     * className : CSS 스타일 적용용 클래스
     * ========================================================== */
    const portfolioList = [
        {
            id: "IT",
            title: "General IT",
            className: "it"
        },
        {
            id: "GAME",
            title: "Game Service",
            className: "game"
        }
    ];

    /* ==========================================================
     * 포트폴리오별 세부 직무 데이터
     * ========================================================== */
    const portfolioMenu = {

        IT: [
            "Backend",
            "Frontend",
            "Full Stack"
        ],

        GAME: [
            "Game Backend"
        ]

    };

    /* ==========================================================
 * 포트폴리오 입장
 *
 * 현재 선택된 Portfolio / Role 확인
 * 이후 Router 연결 예정
 * ========================================================== */
const enterPortfolio = () => {
    console.log(
        "Enter Portfolio :",
        selectedPortfolio,
        "/ Role :",
        selectedRole
    );
    setIsEntered(true);
};

    /* ==========================================================
     * 상위 포트폴리오 버튼 생성
     * ========================================================== */
    const renderPortfolioButton = (item) => (
        <button
            key={item.id}
            className={`
                portfolio-card
                ${item.className}
                ${
                    selectedPortfolio === item.id
                    ? "selected"
                    : ""
                }
            `}
            onClick={() => selectPortfolio(item.id)}
        >
            <h2>
                {item.title}
            </h2>
        </button>
    );

    /* ==========================================================
     * 세부 직무 버튼 생성
     * ========================================================== */
    const renderMenuButton = (menu) => (
        <button
            key={menu}
            className={`
                detail-button
                ${
                    selectedRole === menu
                    ? "selected"
                    : ""
                }
            `}
            onClick={() => selectRole(menu)}
        >
            {menu}
        </button>
    );

    return (
        <div className="welcome-container">
            <section className="welcome-content">
                {/* ===============================
                    제목
                ================================ */}
                <h1>
                    Portfolio
                </h1>

                {/* ===============================
                    안내 문구
                ================================ */}
                <p className="welcome-subtitle">
                    보고 싶은 포트폴리오 유형을 선택해주세요.
                </p>

                {/* ===============================
                    상위 포트폴리오 선택
                ================================ */}
                <div className="portfolio-select">
                    {
                        portfolioList.map(renderPortfolioButton)
                    }
                </div>

                {/* ===============================
                    세부 직무 선택
                ================================ */}
                <div className="portfolio-detail">
                    {
                        portfolioMenu[selectedPortfolio]
                        ?.map(renderMenuButton)
                    }
                </div>

                {/* ===============================
                    현재 선택 정보 표시
                ================================ */}
                <div className="selected-info">
                    <p>
                        <span>
                            Portfolio :{" "}
                        </span>
                        <strong>
                            {selectedPortfolio || "-"}
                        </strong>
                    </p>
                    <p>
                        <span>
                            Role :{" "}
                        </span>
                        <strong>
                            {selectedRole || "-"}
                        </strong>
                    </p>
                </div>
                <button
                    className="enter-button"
                    disabled={!selectedRole}
                    onClick={enterPortfolio}
                >
                    입장하기
                </button>
            </section>
        </div>
    );
}

export default Welcome;