import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>AITC</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://aitc-jsc.com/'}
                        >
                            <h4>www.aitc-jsc.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Software Engineer</h3>
                        <b>
                            <p>Dec 2025 - Present</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Asia Information Technology Center (AITC) is a leading tech 
                    provider. As a Software Engineer, I focus on full-stack 
                    development, system optimization, and integrating AI 
                    solutions to improve business efficiency.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and maintained the official corporate website 
                            using WordPress, leveraging AI to optimize JavaScript 
                            and enhance UI/UX with modern animations.
                        </p>
                    </li>
                    <li>
                        <p>
                            Engineered the "Tân Hòa Chatbot" dashboard using React, 
                            integrating advanced AI capabilities for automated customer 
                            interaction and real-time data visualization.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built a QR Code E-card system featuring impressive 
                            popups and seamless integration for guest management, 
                            optimized through AI-driven logic.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated on internal equipment management tools, 
                            implementing configuration comparison features and 
                            proactive maintenance alert systems.
                        </p>
                    </li>
                    <li>
                        <p>
                            Focused on building clean, modular architecture and 
                            optimizing API performance to ensure system 
                            scalability across multiple enterprise applications.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
