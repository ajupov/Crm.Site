import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { FC } from 'react'

import { About } from '../../pages/about/About'
import { Api } from '../../pages/api/Api'
import { Contacts } from '../../pages/contacts/Contacts'
import { Home } from '../../pages/home/Home'
import { NotFound } from '../../pages/notFound/NotFound'
import { Plans } from '../../pages/plans/Plans'
import { SiteMap } from '../../pages/siteMap/SiteMap'

export const Application: FC = () => (
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
