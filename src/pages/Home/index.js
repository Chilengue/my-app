import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category from "../../components/Category";
import Container, { category, filterCategory } from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import video from "../../json/video.json";

const categories =
    [
        "Geografia",
        "Como fazer e usar",
        "Astronomia e Geografia",
        "Climatologia, Meteorologia, Vegetação",
        "Geologia e Hidrografia"
//     ];
function filterCategory(id) {
            return videos.filter(video => video.category === categories[id])
        }
function Home() {
            return (
                <>
                    <Header />
                    <Banner image="home"></Banner>
                    <Container >

                        <section className="cards">

                            <Category category={categories[0]}>
                                {filterCategory(0).map((video) => <Card id={video.id} key={video.id} />)}
                            </Category>
                            <Category category={categories[1]}>
                                {filterCategory(1).map((video) => <Card id={video.id} key={video.id} />)}
                            </Category>

                            <Category category={categories[2]}>
                                {filterCategory(2).map((video) => <Card id={video.id} key={video.id} />)}
                            </Category>

                            <Category category={categories[3]}>
                                {filterCategory(3).map((video) => <Card id={video.id} key={video.id} />)}
                            </Category>


                        </section>
                    </Container>

                    <Footer />
                </>

            );
        }

export default Home;
