import React, { useState } from 'react';
import './Welcome.css';

function Welcome() {

    const [selectedPortfolio, setSelectedPortfolio] = useState("");

    const selectPortfolio = (type) => {
        setSelectedPortfolio(type);
    };

    return (
        <div className="welcome-container">
            <section className="welcome-content">
                <h1>Portfolio</h1>
                <p className="welcome-subtitle">
                    보고 싶은 포트폴리오 유형을 선택해주세요.
                </p>
                <div className="portfolio-select">
                    <button
                        className={`portfolio-card it ${
                            selectedPortfolio === "IT" ? "selected" : ""
                        }`}
                        onClick={() => selectPortfolio("IT")}
                    >
                        <h2>General IT</h2>
                    </button>
                    <button
                        className={`portfolio-card game ${
                            selectedPortfolio === "GAME" ? "selected" : ""
                        }`}
                        onClick={() => selectPortfolio("GAME")}
                    >
                        <h2>Game Service</h2>
                    </button>
                </div>

                {/* 선택 결과 영역 */}
                <div className="portfolio-detail">
                    {
                        selectedPortfolio === "IT" && (
                            <>
                                <button>Backend</button>
                                <button>Frontend</button>
                                <button>Full Stack</button>
                            </>
                        )
                    }

                    {
                        selectedPortfolio === "GAME" && (
                            <>
                                <button>
                                    Game Backend
                                </button>
                            </>
                        )
                    }
                </div>
            </section>
        </div>
    );
}

export default Welcome;