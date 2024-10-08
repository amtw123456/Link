import { useState } from "react";

import AccountMenu from "./base/AccountMenu";
import NotificationsMenu from "./base/Notifications";
import SearchBar from "./base/SearchBar";
import Messages from "./base/Messages";
import Home from "./base/FeedBar";
import { Button } from "@mui/material";
import FeedBar from "./base/FeedBar";

const AppBar = () => {

    return (
        <nav className="sticky top-0 left-0 w-full z-50 py-1 bg-white border-b backdrop-blur-lg bg-opacity-80">
            <div className="mx-auto max-w-7xl">
                <div className="relative flex items-center justify-between">
                    {/* Left: SearchBar */}
                    <div className="flex items-center w-1/3">
                        <SearchBar />
                    </div>

                    {/* Center: FeedBar */}
                    <div className="flex items-center justify-center w-1/3">
                        <FeedBar />
                    </div>

                    {/* Right: Notifications, Messages, Account */}
                    <div className="flex items-center justify-end space-x-3 w-1/3">
                        <NotificationsMenu />
                        <Messages />
                        <AccountMenu />
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default AppBar;
