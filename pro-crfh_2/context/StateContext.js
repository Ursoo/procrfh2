import React, { createContext, useContext, useState, useEffect } from 'react';
import { client } from '../lib/commerce';
import { useRouter } from 'next/router';

const Context = createContext();


export const StateContext = ({children}) => {
    const [ categories, setCategories ] = useState([]);
    const [ searchKey, setSearchKey ] = useState('');
    const [ resultMessage, setResultMessage ] = useState('');
    const [ searchResult, setSearchResult ] = useState([]);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ limit, setLimit ] = useState(8);
    const router = useRouter();

    const handleInputChange = (event) => {
        if (!searchKey || !event.target.value)
        {
            setResultMessage("");
            setSearchResult([]);
        }

        setSearchKey(event.target.value);
    }

    const handleSearch = async (e) => {
        e.preventDefault();

        if(!searchKey){
            setResultMessage("Introduceti numele produsului dorit.");
        } else {
            try{
                const {data, meta} = await client.products.list({
                    query: searchKey,
                });
                if(!data){
                    setResultMessage("Niciun rezultat.");
                    setSearchResult([]);
                    router.push(`/search?keyword=${searchKey}`);
                    return;
                }
                setResultMessage("");
                setTotalPages(meta.pagination.total_pages);
                setSearchResult(data);
                if (data) router.push(`/search?keyword=${searchKey}`);

            } catch (error){
                setSearchResult([]);
            }
        }
    }


    return (
        <Context.Provider
        value = {{
            categories,
            searchKey,
            resultMessage,
            searchResult,
            totalPages,
            currentPage,
            limit,
            handleInputChange,
            handleSearch
        }}>
            {children}
        </Context.Provider>
    )

}

export const useStateContext = () => useContext(Context);