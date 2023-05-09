import { Cta } from "../../components/Cta"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { About } from "./About"
import { Hero } from "./Hero"
import { Portfolio } from "./Portfolio"
import { Process } from "./Process"
import { Services } from "./Services"
import { Skills } from "./Skills"

export const Home = () =>{
    return(
        <>
            <Header/>
            <Hero/>
            <main>
                <Services/>
                <Portfolio/>
                <Process/>
                <About/>
                <Skills/>
                <Cta/>
            </main>
            <Footer/>
        </>
    )
}