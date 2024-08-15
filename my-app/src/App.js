import "./App.css";

import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"

import Content from "./components/Content/Content"
import { blogPost } from './data';

function App() {
  return (
    <div>
      <div>
      <Header />
      </div> 

      <div className ="content-card">
        <Content title={blogPost.title} body={blogPost.body}/>


      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
