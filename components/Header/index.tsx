import { FC } from 'react';
interface IHeaderprops {};

const Header: FC<IHeaderprops> = () => {
    return (
        <header>
            <a href="#home">Home</a>
            <a href="#contactMe">Contact</a>
        </header>
    )
};

export default Header;
