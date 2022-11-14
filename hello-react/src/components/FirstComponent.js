import './FirstComponent.css'
function FirstComponent(){
    return (
        <div>
            <div className="main">
                <div className="menu-bar">
                    <img src="src/images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e312e706e67.png"/>
                    <img src="src/images/68747470733a2f2f656475636174696f6e2d7465616d2d323032302e73332e65752d776573742d312e616d617a6f6e6177732e636f6d2f7765622d6465762f6c6162732f6c616e64696e672d706167652f69636f6e322e706e67.png"/>
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