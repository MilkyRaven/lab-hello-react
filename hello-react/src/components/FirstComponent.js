import './FirstComponent.css'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

function FirstComponent(){
    return (
        <div>
            <div className="main">
                <div className="menu-bar">
                    <img src={logo}/>
                    <img src={menu}/>
                </div>
                <div className="text-container">
                    <div className="main-text">
                        <h1>Say hello to ReactJS</h1>
                        <h2> You will learn how to use the most popular front end library and become a super ninja developer</h2>
                        <button>Awesome!</button>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="card">
                    <img/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="card">
                    <img/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="card">
                    <img/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div> 
                <div className="card">
                    <img/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>            
            </div>
        </div>
    );
}
export default FirstComponent;