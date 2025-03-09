import logo from "../assets/logo.png"

export default function Header() {
    return (
        <header>
            <img src={logo}/>
            <span className="title">spotify roulette</span>
        </header>
    )
}