import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const ContactsSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <p style={{ fontSize: '1.33em' }}>
                Вы можете cвязаться с нами по адресу:
                <br />
                <a href="mailto:support@litecrm.org">support@litecrm.org</a>
            </p>
        </Container>
    </Segment>
)
