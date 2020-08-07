import React, { useContext } from 'react'
import { Contextvalues } from '../../App.js';

import { Paper, Typography } from '@material-ui/core';
import { IconButton } from "@chakra-ui/core";
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';
const MotionPaper = motion.custom(Paper);

function Header() {
    const context = useContext(Contextvalues)
    const headerArray = [
        { id: 1, name: "Home", toRout: "/" },
        { id: 2, name: "About Us", toRout: "/about" },
        { id: 3, name: "Contact Us", toRout: "/contact" },
    ]
    return (
        <>
            <MotionPaper
                elevation={0}
                style={{ height: 'auto', marginBottom: 0 }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4, duration: 0.2 }}
            >
                <nav
                    className={context.colorMode === "light" ?
                        "navbar navbar-expand-lg navbar-light bg-light" :
                        "navbar navbar-expand-lg navbar-dark bg-dark"}
                    style={{
                        borderBottom: "1px solid #ddd",
                        paddingBottom: 20, paddingTop: 10, paddingLeft: 30, paddingRight: 30
                    }}>
                    <NavLink className="navbar-brand" to=""><b style={{ fontSize: 25, color: "rgb(42, 165, 93)" }}>Fight Foods</b></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto"
                        >
                            {
                                headerArray.map(headerItems => {
                                    return (
                                        <motion.li
                                            className="nav-item active" key={headerItems.id}
                                            initial={{ x: -500, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: 1.4, duration: 0.4, type: "spring", stiffness: 100 }}
                                        >
                                            <NavLink
                                                exact
                                                activeClassName="active_class"
                                                className="nav-link liPadding"
                                                to={headerItems.toRout}
                                            >
                                                {headerItems.name}
                                            </NavLink>
                                        </motion.li>
                                    )
                                })
                            }

                            <motion.li
                                className="nav-item dropdown dropdown-center mr-4"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.9, duration: 0.4, type: "spring", stiffness: 100 }}
                            >
                                <Typography className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Menu
                                        </Typography>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" exact to="/menu/burger">Burgur</NavLink>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1.9, duration: 0.4, type: "spring", stiffness: 100 }}
                            >
                                <IconButton aria-label="Search database" className="nav-item liPadding"
                                    icon={context.colorMode === "light" ? "moon" : "sun"}
                                    borderRadius="50%"
                                    border="1px solid rgb(42, 165, 93)"
                                    size="sm"
                                    mt="1"
                                    color="rgb(42, 165, 93)"
                                    outline="none"
                                    fontWeight="bold"
                                    onClick={context.toggleColorMode}
                                />
                            </motion.li>
                        </ul>
                    </div>
                </nav>
            </MotionPaper>
        </>
    )
}

export default Header
