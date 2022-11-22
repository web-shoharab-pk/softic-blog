import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from '../../features/search/searchSlice';
import searchSvg from './../../assets/search.svg';

const Header = () => {

    const dispatch = useDispatch();

    const debounceHandler = (fn, delay) => {
        let timeoutId;
        return (arg) => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                fn(arg)
            }, delay);
        }
    }

    const doSearch = (text) => {
        dispatch(search(text))
    }

    const handleSearch = debounceHandler(doSearch, 500);

    return (
        <div>
            <div
                className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
            >
                <input
                    className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                    type="search"
                    name="search"
                    placeholder="Search by title"
                    onChange={({ target }) => handleSearch(target.value)}
                    onBlur={({ target }) => handleSearch(target.value)}
                />
                <img
                    className="inline h-6 cursor-pointer"
                    src={searchSvg}
                    alt="Search"
                />
            </div>

            <div className="relative max-w-7xl mx-auto  my-6">
                <div className="text-center">

                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE

                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Header;