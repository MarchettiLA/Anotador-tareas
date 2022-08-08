import TaskingLogo from "../img/logo-white.png"
import "../style/header.css"

function Header() {

// FUNCION QUE CONTROLA NAV BUTTON ///////////////
const navMenu = document.querySelector("[data-nav]");
    
    const handleNav = () => {
        let actualOpacity = navMenu.style.opacity

            if (actualOpacity == 0 || ""){
                navMenu.classList.toggle("active");
                setTimeout(()=>{
                    navMenu.style.opacity = 1;
                },300)
            } else {
                navMenu.style.opacity = 0;
                setTimeout(()=>{
                    navMenu.classList.toggle("active");
                },300)
            }
       }


   const displayListDestktop = ()=>{
        if (window.innerWidth >= 768){
            //navMenu.classList.add("active");

        }
    }

    displayListDestktop();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
     <header>
        <div className="flex-container">
            <div className="flex-item">
                <img src={TaskingLogo}/>
            </div>
            <div className="flex-item">
                <i className="fa-solid fa-bars" onClick={handleNav}></i>
                <nav className="flex-item__nav" data-nav>
                    <ul className="nav__list">
                        <li className="list__item">Inicio</li>
                        <li className="list__item">Sobre el Proyecto</li>
                        <li className="list__item">Contacto</li>
                    </ul>
                </nav>
            </div>
        </div>
     </header>
    );
  }

  export default Header