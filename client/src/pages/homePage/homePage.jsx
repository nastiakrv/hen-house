import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss'
import { AuthContext } from '../../context/AuthContext';


function HomePage(){

    const {currentUser} = useContext(AuthContext);

    //console.log(currentUser)

    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>
                        Find Your Dream House & Live Your Best Life Now
                    </h1>
                    <p>
                        Your happiness is our goal. So here you can explore different 
                        types of houses and choose the one you like.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>5+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>900+</h1>
                            <h2>Satisfied Customers</h2>
                        </div>
                        <div className="box">
                            <h1>3000+</h1>
                            <h2>Properties Available</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    );
}

export default HomePage