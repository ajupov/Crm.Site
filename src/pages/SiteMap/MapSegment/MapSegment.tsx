import { List, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { MapSegmentItem } from './MapSegmentItem'

export const MapSegment: FC = () => (
    <Segment style={{ padding: '3em', height: '100vh' }} vertical>
        <List>
            <List.Item>
                <List.Icon name="folder open" />
                <List.Content>
                    <List.Header>/</List.Header>
                    <List.Description>Главная</List.Description>
                    <List.List>
                        <MapSegmentItem path="about" description="О нас" />
                        <MapSegmentItem path="sitemap" description="Карта сайта" />
                        <MapSegmentItem path="contacts" description="Контакты" />
                        <MapSegmentItem path="plans" description="Наши планы" />
                        <MapSegmentItem path="api" description="API" />
                    </List.List>
                </List.Content>
            </List.Item>
        </List>
    </Segment>
)
