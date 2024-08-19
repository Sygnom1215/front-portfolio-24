import './Sidebar.css'; 

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="https://avatars.githubusercontent.com/u/77712386?v=4" alt="profile" />
            <h4 class="side-text">박소형</h4>
            <h4 class="side-text">2005.09.22</h4>
            <h4 class="side-text">Links :</h4>            
            <h4 class="side-link"><a href="https://github.com/Sygnom1215" style={{textDecoration: "none"}}>GitHub</a></h4> 
   
        </div>
    );
};

export default Sidebar;
