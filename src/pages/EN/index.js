import { Redirect } from 'react-router-dom';

function EN() {

    let lang = localStorage.getItem('lang')
    
    if(lang === "pt-br"){
        return (
            <Redirect to="/" />
        )
    } else if (lang === "en-us"){
        return(
            <Redirect to="/en" />
        )
    }

    return(
        <div className="EN">
        </div>
    )
}


export default EN;