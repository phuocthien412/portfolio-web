import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';

export interface EducationsWindowProps extends WindowAppProps {}

const EducationsWindow: React.FC<EducationsWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Educations"
            windowBarIcon="computerSmall"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="computerSmall" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Educations</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>My Academic Backgrounds</p>
                </div>
                
                <div style={styles.divider} />

                <div style={styles.contentContainer}>
                    <div style={styles.logoPlaceholder}>
                        <Icon icon="hutech" size={128} />
                    </div>
                    <h3 style={{ textAlign: 'center', marginBottom: 32 }}>Ho Chi Minh City University of Technology - HUTECH</h3>
                    
                    <div style={styles.row}>
                        <b>Software Engineering</b>
                        <span>2021 - 2025</span>
                    </div>
                    <div style={styles.row}>
                        <span style={{ margin: '0 auto', display: 'block', marginTop: 16 }}>Expected Graduation: July 2025</span>
                    </div>

                    <p style={{ marginTop: 32, fontSize: 14, lineHeight: 1.5, textAlign: 'justify' }}>
                        My studies in Software Engineering at Ho Chi Minh City University of Technology - HUTECH have been both challenging and rewarding. I gained a deep understanding of computer science fundamentals, learned to think critically, and developed strong analytical skills that have prepared me well for a future career in software engineering. Being an active participant in university projects was also a valuable experience, where I made connections, honed leadership and organizational skills, and participated in activities that deepened my understanding of the technology field.
                    </p>
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
        maxWidth: 800,
        margin: '0 auto',
        width: '100%',
    },
    logoPlaceholder: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 16,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 14,
    },
};

export default EducationsWindow;
