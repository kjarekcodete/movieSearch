import React from "react";
import BackButton from "../BackButton/BackButton";

import './PageHeadr.scss';
const PageHeader = ({title, customClassName}) => {
    return <header className={`page-header ${customClassName}`}>
        <BackButton/>
        <h1>{title}</h1>
    </header>
}

export default PageHeader;