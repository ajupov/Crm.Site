import { Container, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

export const PlansSegment: FC = () => (
    <Segment style={{ padding: '8em 0em' }} vertical>
        <Container text>
            <p style={{ fontSize: '1.33em' }}>1. Выпуск первой версии и бесплатный доступ 100 первым клиентам</p>
            <p style={{ fontSize: '1.33em' }}>2. Обкатка функционала с первыми клиентами</p>
            <p style={{ fontSize: '1.33em' }}>3. Добавление интеграции с Instagram</p>
            <p style={{ fontSize: '1.33em' }}>4. Добавление интеграции с Вконтакте</p>
            <p style={{ fontSize: '1.33em' }}>5. Добавление интеграции с WooCommerce</p>
        </Container>
    </Segment>
)
