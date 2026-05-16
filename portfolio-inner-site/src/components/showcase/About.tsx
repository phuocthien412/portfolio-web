import React from 'react';
import { Link } from '../general';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Ngô Minh Thiên</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a software engineer specializing in React and Python, currently working at 
                    Asia Information Technology Center (AITC)! I am a student at 
                    Ho Chi Minh City University of Technology (HUTECH) with a focus on 
                    building high-performance, production-ready web solutions.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="contact" text="this form" /> or shoot me an email at{' '}
                    <a href="mailto:minhngothien1@gmail.com">
                        minhngothien1@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};


export default About;
