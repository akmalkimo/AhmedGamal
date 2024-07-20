import Page1 from './Page1.jsx'
import Page2 from './Page2.jsx'
import Page3 from './Page3.jsx'

function Content(){
    return (
        <>
            <Page1 />
            <h2 className="about textCentered" id="page2">About Me</h2>
            <Page2 />
            <h2 className="career textCentered" id="page3">My Career</h2>
            <Page3 />  
            <h2 className="contact textCentered" id='page4'>Contact Me</h2>
        </>
    )
}

export default Content