import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    return (
        <>
            <Header />
            <Title name="Articles" />
            <section className=" mt-[30px] mb-[110px]">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </section>
            <Footer />

        </>
    );
}
