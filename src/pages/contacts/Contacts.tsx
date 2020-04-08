import React, { FC, useEffect } from 'react'

import { ContactsSegment } from './ContactsSegment/ContactsSegment'
import { Layout } from '../../components/Layout/Layout'

export const Contacts: FC = () => {
    useEffect(() => {
        document.title = 'Контакты'
    })

    return (
        <Layout>
            <ContactsSegment />
        </Layout>
    )
}
