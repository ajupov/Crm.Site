import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { About } from '../../pages/About/About'
import { Api } from '../../pages/Api/Api'
import { Contacts } from '../../pages/Contacts/Contacts'
import { Home } from '../../pages/Home/Home'
import { NotFound } from '../../pages/NotFound/NotFound'
import { Plans } from '../../pages/Plans/Plans'
import React from 'react'
import { SiteMap } from '../../pages/SiteMap/SiteMap'

export const Application = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sitemap" component={SiteMap} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/plans" component={Plans} />
            <Route path="/api" component={Api} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
