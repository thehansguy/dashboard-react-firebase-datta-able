import React from 'react';
import { Card } from 'react-bootstrap';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import FirebaseLogin from './FirebaseLogin';

const Signin1 = () => {
    return (
        <React.Fragment>
            <Breadcrumb />
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div className="auth-bg">
                        <span className="r" />
                        <span className="r s" />
                        <span className="r s" />
                        <span className="r" />
                    </div>
                    <Card className="borderless text-center">
                        <Card.Body>
                            <h4 className="mb-4">React Firebase Datta Able</h4>

                            <div className="mb-4">
                                <i className="feather icon-unlock auth-icon" />
                            </div>

                            <FirebaseLogin />

                            <br />

                            <p className="mb-0 text-muted">
                                &copy;{' '}
                                <a target="_blank" href="https://codedthemes.com/" rel="noreferrer">
                                    CodedThemes
                                </a>
                                -{' '}
                                <a target="_blank" href="https://appseed.us" rel="noreferrer">
                                    AppSeed
                                </a>
                                .
                            </p>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Signin1;
