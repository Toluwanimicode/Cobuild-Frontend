import React from 'react';
import './Skills.css'; // Optional: for external styling

const Skills = () => {
    const progressData = [
        { title: 'Buildings', value: 85 },
        { title: 'Architecture', value: 60 },
        { title: 'Constructions', value: 70 },
        { title: 'Planning', value: 40 },
    ];

    return (
        <div id='skills'>
            <div className="skills-section">
            <div>
                <h3 className='header'>We are experts in this field
                <br/>
                    since almost 20 years</h3>
                <p></p>
            </div>
            <div className=" highlights col-xs-12 col-sm-6 col-md-6 col-md-offset-1 ">
                {progressData.map((item, index) => (
                    <div className="progressbar" key={index}>
                        <div className="progress-title">
                            <span className="title">{item.title}</span>
                            <span className="value">{item.value}%</span>
                        </div>
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={item.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ width: `${item.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='segment2'>
                <div>
                    <h4 className='header2'>An innovative company working with latest technologies</h4>
                </div>
                <div className='button-container'>
                    <button className='button'>GET A QUOTE</button>
                </div>
            </div>
        </div>
        
    );
};

export default Skills;
