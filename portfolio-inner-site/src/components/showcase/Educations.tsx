import React from 'react';
import { Icon } from '../general';

const Educations: React.FC = () => {
    return (
        <div className="site-page-content" style={styles.page}>
            <div style={styles.header}>
                <Icon icon="computerSmall" size={48} style={{ marginBottom: 8 }} />
                <h2 style={{ margin: 0 }}>Educations</h2>
                <p style={{ margin: 0, color: '#555', fontSize: 12 }}>Academic Background</p>
            </div>
            
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
                    I am currently pursuing a Bachelor's degree in Software Engineering at HUTECH. 
                    Throughout my academic journey, I have maintained a strong focus on core computer science 
                    principles including data structures, algorithms, software design patterns, and full-stack development.
                    I actively participate in technical workshops and coding competitions to sharpen my skills.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        backgroundColor: '#c0c0c0',
        padding: 48,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    contentContainer: {
        backgroundColor: '#fff',
        border: '1px solid #808080',
        borderTopColor: '#000',
        borderLeftColor: '#000',
        padding: 32,
        maxWidth: 700,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
    },
    logoPlaceholder: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 24,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee',
        paddingBottom: 8,
        marginBottom: 8,
    },
};

export default Educations;
