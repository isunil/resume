import React, {Component} from 'react';

export default class Skills extends Component {
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="Skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline list-icons">
                        <li className="list-inline-item">
                            <i className="devicons devicons-html5"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-css3"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-javascript"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-jquery"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-sass"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-less"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-bootstrap"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-dotnet"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-github"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-angular"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-nodejs"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-npm"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-visualstudio"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-mongodb"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-aws"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-react"></i>
                        </li>
                        <li className="list-inline-item">
                            <i className="devicons devicons-msql_server"></i>
                        </li>
                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Multi-Tiered Enterprise Applications
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            SOA and Microservices Architecture
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cloud based Enterprise Applications
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Mobile-First, Responsive Design</li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cross Functional Teams</li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Agile Development &amp; Scrum</li>
                    </ul>
                </div>
            </section>
        );
    }
}