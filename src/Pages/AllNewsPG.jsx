import NewsList from "../components/NewsList";

function AllNewsPG () {
    return(
        <section class="mobile-block">
            <div class="mobile-block__title">Новости</div>
            <div class="All-news-block">
                <NewsList />
            </div>
        </section>
);
}

export default AllNewsPG;