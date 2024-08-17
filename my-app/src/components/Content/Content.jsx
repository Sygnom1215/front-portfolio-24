import "./Content.css";

const Content = ({ title, body }) => {
    return (
    <div>
        <div className="content">
            <h1 className="content-title">{title}</h1>
            <hr className="line"></hr>
            <p className="content-body">{body}</p>
        </div>
    </div>
    );
};

export default Content;