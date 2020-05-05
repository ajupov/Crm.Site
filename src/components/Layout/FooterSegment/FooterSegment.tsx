import { Container, Grid, Header, Icon, List, Segment } from 'semantic-ui-react'
import React, { FC } from 'react'

import { Link } from 'react-router-dom'

export const FooterSegment: FC = () => (
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
            <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as="h4">
                            Дополнительно
                        </Header>
                        <List link inverted>
                            <List.Item as={Link} to="/sitemap">
                                Карта сайта
                            </List.Item>
                            <List.Item as={Link} to="/contacts">
                                Контакты
                            </List.Item>
                            <List.Item as={Link} to="/plans">
                                Наши планы
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as="h4">
                            Сервисы
                        </Header>
                        <List link inverted>
                            <List.Item as={Link} to="/api">
                                API
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as="h4">
                            Информация
                        </Header>
                        <List link inverted>
                            <List.Item
                                as="a"
                                target="blank"
                                href="https://docs.google.com/document/d/1BkQ8f8y5huRluvxZkbxPq7NOAJFEa3wL_cH3J-QqbLI/edit"
                            >
                                Лицензионное соглашение
                            </List.Item>
                            <List.Item
                                as="a"
                                target="blank"
                                href="https://docs.google.com/document/d/1NZK-OuTtHF9kq5xV_IhgaT64TcoBrMr48_KuN3LIpsM/edit?usp=sharing"
                            >
                                Политика в отношении обработки персональных данных
                            </List.Item>
                            <List.Item
                                as="a"
                                target="blank"
                                href="https://docs.google.com/document/d/1cl1R2lMWZSgIMMhoymYhbRU8rlBq3e_dOhYsxe7586E/edit?usp=sharing"
                            >
                                Безопасность и надежность
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as="h4" inverted>
                            СМИ
                        </Header>
                        <List link inverted horizontal>
                            <List.Item as="a" href="https://vk.com">
                                <Icon name="vk" />
                            </List.Item>
                            <List.Item as="a" href="https://instagram.com">
                                <Icon name="instagram" />
                            </List.Item>
                            <List.Item as="a" href="https://ok.ru">
                                <Icon name="odnoklassniki" />
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
)
