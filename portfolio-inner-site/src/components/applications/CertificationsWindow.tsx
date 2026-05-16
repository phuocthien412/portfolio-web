import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';

export interface CertificationsWindowProps extends WindowAppProps {}

const CertCard: React.FC<{ title: string; issuer: string; date: string }> = ({ title, issuer, date }) => (
    <div style={styles.certCard}>
        <div style={styles.certHeader}>
            <strong>{issuer}</strong>
            <span style={{ fontSize: 8, color: '#777' }}>CERTIFICATE OF COMPLETION</span>
        </div>
        <h4 style={styles.certTitle}>{title}</h4>
        <div style={styles.certFooter}>
            <span>NGO MINH THIEN</span>
            <span style={{ fontSize: 10, color: '#555' }}>Date: {date}</span>
        </div>
    </div>
);

const CertificationsWindow: React.FC<CertificationsWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Certifications"
            windowBarIcon="henordleIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="certificate" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Certifications</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>A complete lists of my certifications and achievements</p>
                </div>
                
                <div style={styles.divider} />

                <div style={styles.contentContainer}>
                    <div style={styles.grid}>
                        <CertCard 
                            issuer="Udemy" 
                            title="Advanced React and Redux" 
                            date="Aug 15, 2024" 
                        />
                        <CertCard 
                            issuer="Udemy" 
                            title="The Complete Python Developer" 
                            date="Sep 10, 2024" 
                        />
                        <CertCard 
                            issuer="Coursera" 
                            title="AI For Everyone" 
                            date="Oct 05, 2024" 
                        />
                        <CertCard 
                            issuer="Udemy" 
                            title="WebSockets and Real-time Communication" 
                            date="Nov 20, 2024" 
                        />
                    </div>
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
        alignItems: 'center',
        width: '100%',
    },
    grid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
        maxWidth: 900,
    },
    certCard: {
        width: 260,
        height: 160,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
    },
    certHeader: {
        display: 'flex',
        flexDirection: 'column',
    },
    certTitle: {
        margin: '8px 0',
        fontSize: 14,
        fontWeight: 'bold',
    },
    certFooter: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: 12,
        fontWeight: 'bold',
    },
};

export default CertificationsWindow;
