import React from "react";
import AppsExperience from "./AppsExperience"

class Resume extends React.Component {

    render() {
        return(
            <div style={{display:"flex", flexDirection:"row"}}>
                <div className="resumePaper">
                <div className="resumeHeader">
                    <h3 className="bold">Kenny Quach</h3>
                        <p>700 Newark Ave, Jersey City,NJ 07306 | Cell: 917-257-0115 | <a href="mailto:kq22@scarletmail.rutgers.edu?subject=Portfolio">kq22@scarletmail.rutgers.edu</a></p>
                </div>
                <hr/>
                <div className="resumeBody">
                    <h5 className="bold">Profesional Summary:</h5>
                    <p>Web developer with a passion for web application development and success in working in team projects. Skilled in designing and developing applications that can be used in real world situations. Dedicated to driving innovation and learning new industry trends to put to use.</p>
                    <h5 className="bold">Education:</h5>
                    <div className="bold" style={{fontSize:"15px"}}>RUTGERS, THE STATE UNIVERSITY OF NEW JERSEY</div>
                    <span className="bold">Rutgers Business School-Newark</span>
                    <div>Bachelor of Science, Supply Chain Management</div>
                    <li>Member, Supply Chain Management Association(SCMA)</li>
                    <h5 className="bold">Technical Skills:</h5>
                    <div>HTML5, CSS3, JavaScript, jQuery, ReactJS, React Native, NodeJS+Express, Bootstrap, Restful API, Postman, mySQL </div>
                    <h5 className="bold">Professional Experience</h5>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div className="bold" style={{fontSize:"15px"}}>CraneAI</div>
                        <div style={{marginLeft:5}}>(May 2018-present)</div>
                    </div>
                    <div className="bold" style={{fontSize:"15px"}}>Web Developer, New York, NY</div>
                    <ul>
                        <li>Use HTML, CSS, and JavaScript for smooth execution and design of applications</li>
                        <li>Develop apps using frameworks such as React and React Native</li>
                        <li>Work with nodeJS to run web apps on the server</li>
                        <li>Perform tests on web and mobile apps to ensure user experience is superb</li>
                        <li>Research new web technologies to integrate into applications</li>
                        <li>Create responsive user interface for web and mobile apps</li>
                        <li>Find alternative technologies to use</li>
                    </ul>
                    <div style={{display:"flex", flexDirection:"column"}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <div className="bold" style={{fontSize:"15px"}}>Deep Foods</div>
                    <div style={{marginLeft:5}}>(Feb 2017-May 2018)</div>
                    </div>
                    <div className="bold" style={{fontSize:"15px"}}>Supply Chain Manager, Union, NJ</div>
                    </div>
                    <ul>
                    <li>Create and Issue new purchase orders</li>
                    <li>Coordinate with others to forecast sales and inventory</li>
                    </ul>
                    <div>
                        <div style={{display:"flex", flexDirection:"row"}}>
                        <div className="bold" style={{fontSize:"15px"}}>Sherwin Williams</div>
                        <div style={{marginLeft:5}}>(May 2016-Feb 2017)</div>
                        </div>
                        <div className="bold" style={{fontSize:"15px"}}>Inventory Coordinator, Moonachie, NJ</div>
                    
                    </div>
                    <ul>
                        <li>Coordinate with Suppliers to ensure economies of Scale</li>
                        <li>Receive and verify incoming inventory</li>
                    </ul>
                    <h5 className="bold">Competencies:</h5>
                    <ul>
                        <li>Knowledgeable in Microsoft Excel, Word, PowerPoint</li>
                        <li>Detail oriented, motivated, deadline driven and analytical</li>
                    </ul>
                </div>
                </div>
                <AppsExperience/>
                <div>
                </div>
            </div>
            
        );
    }
}


export default Resume;