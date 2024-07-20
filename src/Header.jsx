import React, {useState, useRef} from 'react'

function Header(){

    const [menuChecked, setMenuChecked] = useState(false);

    const menuRef = useRef(null);
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);
    const row3Ref = useRef(null);

    function openMenu(){
         setTimeout(() => {
                menuRef.current.style.transform = "translateX(0)";
                menuRef.current.style.transition = "transform 0.3s ease-out";}, 100)
                menuRef.current.style.display = "block"
                row1Ref.current.className = "hamburgerRow1Checked";
                row2Ref.current.className = "hamburgerRow2Checked";
                row3Ref.current.className = "hamburgerRow3Checked";
                setMenuChecked(true);
    }

    function closeMenu(){
            menuRef.current.style.transform = "translateX(100%)";
            setTimeout(() => menuRef.current.style.display = "none", 250);
            row1Ref.current.className = "hamburgerRow1";
            row2Ref.current.className = "hamburgerRow2";
            row3Ref.current.className = "hamburgerRow3";
            setMenuChecked(false);
    }

    function handleMenu(){
        if(menuChecked === false){
            openMenu();
        }else{
            closeMenu();
        }
    }

    return(
        <>
        <nav>
            <div className="mobileNavWrapper" id="#">
                <h1><a href="#" className="name cursive">Ahmed Gamal.</a></h1>
                <div className="menu" ref={menuRef}>
                    <ul className="burgerNav">  
                        <li><a href="#page1" onClick={closeMenu}>Home</a></li>
                        <li><a href="#page2" onClick={closeMenu}>About Me</a></li>
                        <li><a href="#page3" onClick={closeMenu}>Career</a></li>
                        <li><a href="#page4" onClick={closeMenu}>Contact Me</a></li>
                    </ul>
                </div>
                <div className="cvMenuWrapper">
                    <a href="/AhmedGamal/AhmedGamalCV.pdf" download="Ahmed Gamal's CV">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="downloadSVG"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                        <span>Download CV</span>
                    </a>
                    <div className="hamburger" onClick={handleMenu}>
                        <div className="hamburgerRow1" ref={row1Ref}></div>
                        <div className="hamburgerRow2" ref={row2Ref}></div>
                        <div className="hamburgerRow3" ref={row3Ref}></div>
                    </div>
                </div>
            </div>
            <div className="normalNav">
            <h1><a href="#" className="name cursive">Ahmed Gamal.</a></h1>
                <a href="/AhmedGamal/AhmedGamalCV.pdf" download="Ahmed Gamal's CV" className="cvWrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
                    <span>Download CV</span>
                </a>
                <a href="#page1">Home</a>
                <a href="#page2">About Me</a>
                <a href="#page3">Career</a>
                <a href="#page4">Contact Me</a>
            </div>
        </nav>
        </>
    )
}

export default Header