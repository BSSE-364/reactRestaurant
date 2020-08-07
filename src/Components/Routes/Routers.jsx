import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'

import Home from '../Body/Home'
import About from '../Body/About'
import Menu from '../Body/Menu/Menu'
import Contact from '../Body/Contact'
import Service from '../Body/Service'
import Resurvation from '../Body/Resurvation/Resurvation'
import BookDetail from '../Body/Resurvation/BookDetail'
import BurgerDetails from '../Body/Menu/BurgerDetails'
import { AnimatePresence } from 'framer-motion'

function Routers() {
    const location = useLocation()
    return (
        <>
            <AnimatePresence>
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Home} />
                    <Route path="/service" component={Service} />
                    <Route path="/resurvation" component={Resurvation} />
                    <Route path="/bookDetail" component={BookDetail} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                    <Route exact path="/menu/:name" component={Menu} />
                    <Route exact path="/menu/burger/:id">
                        <BurgerDetails />
                    </Route>
                </Switch>
            </AnimatePresence>
        </>
    )
}

export default Routers
