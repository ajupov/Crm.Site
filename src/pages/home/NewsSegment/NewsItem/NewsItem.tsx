import { Button, Header } from 'semantic-ui-react'
import React, { FC } from 'react'

export const NewsItem: FC = () => (
    <>
        <Header as="h3" style={{ fontSize: '2em' }}>
            Очень мега крутая важная новость
        </Header>
        <p style={{ fontSize: '1.33em' }}>
            В последнее время у нас очень много много разных новостей, о чем мы подробно сейчас и будем рассказывать
        </p>
        <Button as="a" size="large" href="https://google.com">
            Читать далее
        </Button>
    </>
)
