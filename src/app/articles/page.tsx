import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    return (
        <>
            <Header />
            <Title name="Articles" />
            <section className="mt-7.5 mb-27">
                <ArticleCard title="Understanding the bind method in JavaScript and why it matters." imagesrc="/BindLogo.webp" subtitle="A Deep Dive into Function Context and Permanent Binding." date="Sep 23, 2025" readTime="3 min" />
                <ArticleCard title="Building a Neural Network Framework for Solving PDE" imagesrc="/PDELogo.gif" subtitle="Practical Implementation Guide in TensorFlow" date="Aug 28, 2024" readTime="5 min" />
            </section>
            <Footer />

        </>
    );
}
 
