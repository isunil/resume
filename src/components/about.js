import React, {
    Component
} from 'react';

export default class About extends Component{
    render(){
        return(
            <div>
                <section className="resume-section p-3 p-lg-5 d-flex d-column" id="About">
                <div className="my-auto">
                    <h1 className="mb-0">Sunil
                    <span className="text-primary">Nuthalapati</span>
                    </h1>
                    <div className="subheading mb-5">Houston · TX · (972) 571-9578 ·
                    <a href="mailto:sunil.nuthalapati@gmail.com">sunil.nuthalapati@gmail.com</a>
                    </div>
                    <p className="mb-5"> Consulting project lead and nimble full stack developer for many flagship projects and delivered high performing
                    solutions with fully automated CI/CD pipeline and industry best practices.
                    </p>
                    <ul className="list-inline list-social-icons mb-0">
                    <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/sunil-nuthalapati-378073b6/">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                        </span>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://github.com/isunil">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                        </a>
                    </li>
                    </ul>
                </div>
                </section>
            </div>
        );
    }
}