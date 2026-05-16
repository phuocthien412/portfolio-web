import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';
import { IconName } from '../../assets/icons';

export interface ProjectsWindowProps extends WindowAppProps {}

const ProjectDetail: React.FC<{ title: string; description: string; icon: IconName }> = ({ title, description, icon }) => (
    <div style={styles.projectContainer}>
        <div style={styles.projectHeader}>
            <div className="big-button-container" style={styles.iconContainer}>
                <Icon icon={icon} size={32} />
            </div>
            <h2 style={styles.projectTitle}>{title}</h2>
        </div>
        <div className="text-block" style={styles.projectDescription}>
            <p>{description}</p>
        </div>
    </div>
);

const ProjectsWindow: React.FC<ProjectsWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Projects"
            windowBarIcon="project"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="project" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Projects</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>My Professional Projects & Endeavors</p>
                </div>
                
                <div style={styles.divider} />

                <div style={styles.contentContainer}>
                    <ProjectDetail 
                        title="Tân Hoa Chatbot Project"
                        icon="windowGameIcon"
                        description="As a new member, I quickly integrated into the team by leveraging AI to master new languages and accelerate development, successfully engineering a high-performance dashboard to visualize real-time chatbot logs."
                    />
                    
                    <ProjectDetail 
                        title="Official Website AITC"
                        icon="showcaseIcon"
                        description="Deployed the company's official website (aitc-jsc.com) using WordPress, utilizing AI to implement sophisticated JavaScript effects that enhanced visual appeal while ensuring SEO optimization and full responsiveness."
                    />

                    <ProjectDetail 
                        title="QR CODE - ECARD"
                        icon="computerSmall"
                        description="Developed an event management platform featuring QR-integrated guest tracking and personalized E-card generation, while utilizing AI to design high-end interactive popups for seamless guest check-ins."
                    />

                    <ProjectDetail 
                        title="Equipment Management System"
                        icon="windowExplorerIcon"
                        description="Deployed a production-ready device management system featuring hardware comparison tools and automated maintenance monitoring. Leveraged AI to optimize hardware specification analysis and intelligent field filtering during Excel imports, transforming raw data into a highly searchable and professional user interface."
                    />
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#c0c0c0',
        display: 'flex',
        flexDirection: 'column',
        padding: '24px 48px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#fff',
        borderTop: '1px solid #808080',
        marginBottom: 24,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        width: '100%',
        maxWidth: 800,
        margin: '0 auto',
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid #ccc',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
        padding: 24,
        boxSizing: 'border-box',
    },
    projectHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    projectTitle: {
        fontSize: 24,
        margin: 0,
        fontWeight: 'bold',
        color: '#333',
    },
    projectDescription: {
        marginTop: 0,
        fontSize: 14,
        lineHeight: 1.5,
        color: '#444',
    },
};

export default ProjectsWindow;
