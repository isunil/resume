import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ExperienceItem extends Component {

    render() {
        const {
            role,
            company,
            responsibilities,
            stack,
            duration,
            url
        } = this.props.exp;

        return (
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
                <div className="resume-content mr-auto">
                    <h3 className="mb-0">{role}</h3>
                    <div className="subheading mb-3">{company}</div>
                    <p>{responsibilities}</p>
                    <p>Focus: {stack}</p>
                    {url
                        ? <p>Link: {<a href='url'>www.nwacricket.com</a>}</p>
                        : ''}
                </div>
                <div className="resume-date text-md-right">
                    <span className="text-primary">{duration}</span>
                </div>
            </div>
        );
    }
}

ExperienceItem.propTypes = {
    role: PropTypes.string,
    company: PropTypes.string,
    responsibilities: PropTypes.string,
    stack: PropTypes.string,
    duration: PropTypes.string,
    url: PropTypes.string
}

export default ExperienceItem;