import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const ApiSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <p style={{ fontSize: '1.33em' }}>
                Swagger-generated описание OAuth:
                <br />
                <a href="http://identity.litecrm.org">http://identity.litecrm.org</a>
                <br />
                <br />
                Для добавления OAuth входа для Вашего приложения вы можете написать по адресу:
                <br />
                <a href="mailto:support@litecrm.org">support@litecrm.org</a>
            </p>
        </Container>
        <br />
        <br />
        <br />
        <Container text>
            <p style={{ fontSize: '1.33em' }}>
                Swagger-generated описание API:
                <br />
                <a href="http://api.litecrm.org">http://api.litecrm.org</a>
            </p>
        </Container>
    </Segment>
)
