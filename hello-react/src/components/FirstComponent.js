import './FirstComponent.css'
import logo from '../images/logo.png'
import menu from '../images/menu.png'
import code from '../images/code.png'
import engine from '../images/engine.png'
import tool from '../images/tool.png'
import write from '../images/write.png'

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
                    <img src={tool}/>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div className="card">
                    <img src={write}/>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state</p>
                </div>
                <div className="card">
                    <img src={engine}/>
                    <h3>Single-Way</h3>
                    <p>A set of immutable values are passed to the components</p>
                </div> 
                <div className="card">
                    <img src={code}/>
                    <h3>JSX</h3>
                    <p>Statically-typed, designed to run on modern browsers</p>
                </div>            
            </div>
        </div>
    );
}
export default FirstComponent;