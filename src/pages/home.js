import LeftSidebar from "../components/leftSidebar/leftSidebar";
import RightSidebar from "../components/rightSidebar/rightSidebar";

function Home() {
    return (
        <section className="bg-lime-100 flex justify-between w-full h-full pt-3">
            <LeftSidebar />

            <div><h1>Home Page</h1></div>

            <RightSidebar />
        </section>
    );
}

export default Home;