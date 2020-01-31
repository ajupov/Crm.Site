import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const PlansSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <p style={{ fontSize: '1.33em' }}>Здесь будут описаны наши планы по развитию сервиса</p>
        </Container>
    </Segment>
)
