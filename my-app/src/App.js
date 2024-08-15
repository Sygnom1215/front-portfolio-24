import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"

import Content from "./components/Content/Content"

function App() {
  return (
    <div>
      <div>
      <Header />
      </div> 

      <div className ="content-card">
        <Content />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
