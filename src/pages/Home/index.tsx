import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Hero } from "./Hero"
import { Services } from "./Services"

export const Home = () =>{
    return(
        <>
            <Header/>
            <Hero/>
            <main>
                <Services/>
            </main>
            <Footer/>
        </>
    )
}