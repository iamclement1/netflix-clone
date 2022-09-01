import Hero from "../components/Hero"
import Row from "../components/Row"
import requests from "../Request"

const Home = () => {
    return (
        <div>
            <Hero />
            <Row title='UpComing' fetchURL={requests.requestUpcoming} />
            <Row title='Popular' fetchURL={requests.requestPopular} />
            <Row title='Trending' fetchURL={requests.requestTrending} />
            <Row title='Top Rate' fetchURL={requests.requestTopRated} />
            <Row title='Horror' fetchURL={requests.requestHorror} />
        </div>
    )
}

export default Home
