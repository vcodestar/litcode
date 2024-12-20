import React, { useEffect, useState } from "react";
import LinkComponent from "./LinkComponent";
import MenuHeader from "./MenuHeader";
import { loadWriteups } from "./loadWriteups";

function MySQLMenu() {
    const [links, setLinks] = useState([]);
    const writeups = import.meta.glob('/src/languages_menus/mysql_writeups/*.jsx');

    useEffect(() => {
        loadWriteups(writeups, 'mysql_writeups').then((links) => {
            setLinks(links);
        });
    }, []);

    return (
        <div>
            <MenuHeader name="MySQL" />
            <LinkComponent links={links} />
        </div>
    );
}

export default MySQLMenu;
