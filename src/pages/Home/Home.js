import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import TopContainer from '../../components/TopContainer/TopContainer';
import UserCard from '../../components/UserCard/UserCard';
import './Home.css';
import MyButton from '../../components/MyButton/MyButton';
import useResults from '../../hooks/useResults';
import Loader from 'react-loader-spinner';
import { Palette } from '../../constants/Colors';

const Home = () => {
    const [query, setQuery] = useState('');
    const [filterQuery, setFilterQuery] = useState('');
    const [curPage, setCurPage] = useState(1);
    const [fetchResults, results, isLoading] = useResults();

    const loadMore = () => {
        fetchResults(curPage);
        setCurPage(curPage + 1);
    }

    const filterByName = () => {
        setFilterQuery(query);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            filterByName();
        }
    }

    const getUserCards = () => {
        if (results) {
            let cards = results.filter((r) => (r.title + ' ' + r.firstName + ' ' + r.lastName)
                .toLowerCase()
                .includes(filterQuery
                    .toLowerCase())).map((e) => {
                        return <UserCard
                            picture={e.picture}
                            title={e.title}
                            firstName={e.firstName}
                            lastName={e.lastName}
                            email={e.email}
                        />;
                    });

            if (cards.length > 0) {
                return cards;
            } else {
                return <p>No Results</p>;
            }
        }

        return <p>Loading...</p>;
    }

    return (
        <div className="Screen">
            <Header />
            <div className="Seperator"></div>
            <TopContainer
                onInputChange={(e) => { setQuery(e.target.value) }}
                onButtonClick={filterByName}
                onKeyDown={handleKeyDown}
            />
            <div className="UserContainer">
                {getUserCards()}
            </div>
            {isLoading ? <Loader
                type="Puff"
                color={Palette.greenlandGreen}
                height={50}
                width={50}
                className="Loader"
            /> : <MyButton onClick={loadMore} text="Load More" />}
        </div >
    );
};

export default Home;
