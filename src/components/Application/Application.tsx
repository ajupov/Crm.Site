import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { About } from '../../pages/About/About'
import { Home } from '../../pages/Home/Home'
import { NotFound } from '../../pages/NotFound/NotFound'
import React from 'react'

export const Application = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
