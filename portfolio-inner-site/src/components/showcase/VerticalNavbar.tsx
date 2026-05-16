import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation, useNavigate } from 'react-router-dom';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    if (isHome) return null;

    if (isCollapsed) {
        return (
            <div style={styles.collapsedNavbar}>
                <button 
                    onClick={() => setIsCollapsed(false)} 
                    style={styles.toggleBtn}
                >
                    ☰
                </button>
            </div>
        );
    }

    return (
        <div style={styles.navbar}>
            <div style={styles.toggleContainer}>
                <button 
                    onClick={() => setIsCollapsed(true)} 
                    style={styles.toggleBtn}
                >
                    ×
                </button>
            </div>
            <div style={styles.header}>
                <h1 style={styles.headerText}>NGO MINH</h1>
                <h1 style={styles.headerText}>THIEN</h1>
                <h3 style={styles.headerShowcase}>Showcase '26</h3>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text="ABOUT" />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text="EXPERIENCE"
                />
                <Link
                    containerStyle={styles.link}
                    to="projects"
                    text="PROJECTS"
                />
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text="CONTACT"
                />
            </div>
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact}>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        paddingTop: 24,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #ccc',
        zIndex: 1000,
    },
    collapsedNavbar: {
        width: 60,
        height: '100%',
        flexDirection: 'column',
        padding: '24px 12px',
        boxSizing: 'border-box',
        position: 'fixed',
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #ccc',
        zIndex: 1000,
        alignItems: 'center',
    },
    toggleContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: 16,
    },
    toggleBtn: {
        background: 'none',
        border: 'none',
        fontSize: 24,
        cursor: 'pointer',
        padding: 4,
    },
    header: {
        flexDirection: 'column',
        marginBottom: 64,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    link: {
        marginBottom: 32,
    },
    links: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',
        width: '100%',
    },
};

export default VerticalNavbar;
