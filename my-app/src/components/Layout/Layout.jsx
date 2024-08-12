import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Contents from "./Contents/Content"

const Layout = () => {
  return (
    <div>
      <Header />
        <main>
            <h1>ThisisLayout</h1>
        </main>
      <Contents />
      <Footer />
    </div>
  )
}

export default Layout