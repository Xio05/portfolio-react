import Profile from './Profile'
import MainGrid from './MainGrid'
import Navbar from './Navbar'

function App() {
    return (
        <main className="App">
            <section>
                <Profile />
            </section>

            <section className="grid-section">
                <MainGrid />
            </section>

            <Navbar />
            <div style={{ height: '8rem' }}></div>
        </main>



    )



}

export default App
