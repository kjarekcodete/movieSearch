import React from "react";
import BackButton from "../../components/BackButton/BackButton";
import './NotFound.scss'

const NotFound = () => {
  return <section className="container not-found dark-background">
    <p className="not-found-info">Unfortunately we cannot find page which you looking for please use Back buttton to go
      to search page</p>
    <BackButton path={'/'}/>
  </section>
}

export default NotFound;