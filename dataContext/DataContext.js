import { useState, createContext } from "react";
import useAxiosFetch from "../api/useAxiosFetch";

const DataContext = createContext({});

export const ContextProvider = ({ children }) => {
    const { data, isLoading, error } = useAxiosFetch()
    const [pageIndex, setPageIndex] = useState(0);
    const [pageNum, setPageNum] = useState(1);
    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("name");
    const [nextBtn, setNextBtn] = useState(false)

    return (
        <DataContext.Provider value={{ data, isLoading, error, pageIndex, setPageIndex, pageNum, setPageNum, search, setSearch, searchTerm, setSearchTerm, nextBtn, setNextBtn }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext