import React, {useState, useEffect} from "react";
import {useHistory} from "react-router";


const BackButton = () => {
  const history = useHistory();
  const [sameDomain, setSameDomain] = useState(true)

  const goBack = () => {
    sameDomain ? history.goBack() : history.push('/');
  }

  useEffect(() => {
    const refererHost = document.referrer.length ? new URL(document.referrer).hostname : ''
    const currentHost = window.location.hostname;
    if (refererHost.length && refererHost !== currentHost) setSameDomain(false);
  }, [])
  return <button type="button" className="btn btn-primary" onClick={goBack}>
    Back
  </button>
}

export default BackButton;