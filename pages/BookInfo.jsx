import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";

const BookInfo = ({books}) => {
    return (
       <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to='/books' className='book__link'>
                                <FontAwesomeIcon icon={'arrow-left'} />
                            </Link>
                            <Link to={'/books'}>
                                <h2 className="book__selected--title--top">Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src="https://covers.openlibrary.org/b/id/8091016-L.jpg" alt="" />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">Cracking the Coding Interview</h2>
                                <Rating rating={2.5}/>
                                <div className="book__selected--price">
                                    <Price salePrice={50} originalPrice={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
       </div>
    )
}

export default BookInfo