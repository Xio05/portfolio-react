import { Routes, Route } from 'react-router-dom'
import Profile from './Profile'
import MainGrid from './MainGrid'
import Navbar from './Navbar'
import MyProjects from './MyProjects'

function App() {
    return (
        <main className="App">
            <Routes>
                <Route path="/" element={
                    <>
                        <section>
                            <Profile />
                        </section>

                        <section className="grid-section">
                            <MainGrid />
                        </section>

                        <div style={{ height: '8rem' }}></div>
                    </>
                } />
                <Route path="/projects" element={<MyProjects />} />
            </Routes>

            <Navbar />
        </main>
    )
}

export default App
