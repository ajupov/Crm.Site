import { Grid, Header, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const MissionSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
            <Grid.Row>
                <Grid.Column width={16}>
                    <Header as="h3" style={{ fontSize: '2em' }}>
                        Мы будем помогать индивидуальным предпринимателям и небольшим компаниям
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы будем предоставлять инструмент, который позволит вести ежедневную деятельность из любого
                        места в любое время
                    </p>
                    <p style={{ fontSize: '1.33em' }}>
                        Мы будем быстро и гибко дорабатывать нашу систему на основе Ваших потребностей
                    </p>
                    <p style={{ fontSize: '1.33em' }}>Мы будем интегрировать нашу систему с большим количеством внешних систем. Это будут социальные сети, конструкторы интернет-магазинов и т.д.</p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
)
