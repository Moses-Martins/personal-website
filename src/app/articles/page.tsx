import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "../components/Title";
import ArticleCard from "./ArticleCard";

export default function Articles() {
    return (
        <>
            <Header />
            <Title name="Articles" />
            <main className="flex-grow">
                <section className="mt-7.5 mb-27">
                    <ArticleCard title="Understanding Div Soup in HTML and How to Avoid It" imagesrc="/divsoup.webp" subtitle="The Semantic Fix for Code Clutter" date="Oct 28, 2025" readTime="4 min" articleLink="https://medium.com/@mosesmartins/understanding-div-soup-in-html-and-how-to-avoid-it-a2fee375f9e2" />
                    <ArticleCard title="Understanding the bind method in JavaScript and why it matters." imagesrc="/BindLogo.webp" subtitle="A Deep Dive into Function Context and Permanent Binding." date="Sep 23, 2025" readTime="3 min" articleLink="https://medium.com/@mosesmartins/understanding-the-bind-method-in-javascript-and-why-it-matters-189691b1e289" />
                    <ArticleCard title="Building a Neural Network Framework for Solving PDE" imagesrc="/PDELogo.gif" subtitle="Practical Implementation Guide in TensorFlow" date="Aug 28, 2024" readTime="5 min" articleLink="https://medium.com/@mosesmartins/building-a-neural-network-framework-for-solving-partial-differential-equations-a0415b216052" />
                </section>
            </main>
            <Footer />
        </>
    );
}

