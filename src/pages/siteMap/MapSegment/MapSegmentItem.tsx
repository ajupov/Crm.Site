import React, { FC } from 'react'

import { List } from 'semantic-ui-react'

interface IMapSegmentItemProps {
    path: string
    description: string
}

export const MapSegmentItem: FC<IMapSegmentItemProps> = ({ path, description }) => (
    <List.Item>
        <List.Icon name="file" />
        <List.Content>
            <List.Header>{path + '/'}</List.Header>
            <List.Description>{description}</List.Description>
        </List.Content>
    </List.Item>
)
