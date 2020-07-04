import { Button, Container, Header, Icon, Image, Responsive, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import Configuration from '../../../configuration/Configuration'

export const BannerSegment: FC = () => {
    const configuration = new Configuration()

    return (
        <Segment inverted style={{ minHeight: 680, padding: 0 }} textAlign="center" vertical>
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Image
                    size="massive"
                    src="./content/banner.jpg"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        maxHeight: '680px',
                        height: '100%'
                    }}
                />
            </Responsive>

            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Image
                    size="massive"
                    src="./content/banner-mobile.jpg"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        maxHeight: '680px',
                        height: '100%'
                    }}
                />
            </Responsive>

            <Container style={{ position: 'absolute', width: '100%' }}>
                <Header
                    as="h1"
                    content="Lite CRM"
                    inverted
                    style={{
                        fontSize: '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: '3em'
                    }}
                />
                <Header
                    as="h2"
                    content="Скоро начнем. Осталось ждать совсем чуть-чуть"
                    inverted
                    style={{
                        fontSize: '1.7em',
                        fontWeight: 'normal',
                        marginTop: '1.5em'
                    }}
                />
                <Button inverted size="huge" href={configuration.LoginUrl}>
                    Начать
                    <Icon name="arrow right" />
                </Button>
            </Container>
        </Segment>
    )
}
