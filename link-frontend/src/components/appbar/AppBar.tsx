import { useState } from "react";

import AccountMenu from "./base/AccountMenu";
import NotificationsMenu from "./base/Notifications";
import SearchBar from "./base/SearchBar";

const AppBar = () => {

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b backdrop-blur-lg bg-opacity-80">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
                <div className="relative flex h-12 justify-between">
                    <div className="flex flex-1 items-stretch justify-start">

                    </div>
                    <div className="flex-shrink-0 flex px-2 py-3 items-center space-x-2">
                        <SearchBar />
                        <NotificationsMenu />
                        <AccountMenu />

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default AppBar;
