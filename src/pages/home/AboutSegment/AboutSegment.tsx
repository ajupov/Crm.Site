import { Grid, Header, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const AboutSegment: FC = () => (
    <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        О нас
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы небольшая компания, которая хочет облегчить операционную деятельность таких же небольших
                        компаний
                    </p>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы хотим быстро и гибко предоставлять новые возможности для автоматизации и тем самым принося им
                        ценность
                    </p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        Связь с нами
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>Вы можете связаться с нами по адресу:</p>
                    <p style={{ fontSize: '1.33em' }}>
                        <a href="mailto:support@litecrm.org">support@litecrm.org</a>
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)
