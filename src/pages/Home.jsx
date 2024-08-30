import "./../assets/css/home.css"

export default function Home() {

    return (
        <>
            <nav id="navbar">
                <div className="max-width">
                    <a className="logo"><span>Bem+</span>Saúde</a>
                    <ul className="menus">
                        <li className="menu">
                            <a href="#">Menu</a>
                        </li>
                        <li className="menu">
                            <a href="#">Menu</a>
                        </li>
                        <li className="menu">
                            <a href="#">Menu</a>
                        </li>
                    </ul>
                    <ul className="menus">
                        <li className="menu outline">
                            <a href="#">Login</a>
                        </li>
                        <li className="menu highlight">
                            <a href="#">Baixar App</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <header></header>
            <main></main>
            <footer></footer>
        </>
    )

}