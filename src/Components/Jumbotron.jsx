import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap'
import kosmos from '../kosmos.jpg'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbo{
        background: url(${kosmos}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position: relative;
        z-index: -2;
    }
    .overlay{
        background-color: black;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Nekk Blog</h1>
                    <p> &nbsp; &nbsp;Google управляет более чем миллионом серверов в центрах обработки данных по всему миру
                        и обрабатывает более одного миллиарда поисковых запросов и 24 петабайт пользовательских данных
                        каждый день. Быстрый рост Google с момента её основания привёл к появлению большого числа продуктов,
                        не связанных непосредственно с главным продуктом компании — поисковой системой. У Google есть такие
                        онлайн-продукты как почтовый сервис Gmail, социальная сеть Google+. У компании есть и настольные продукты,
                        такие как обозреватель Google Chrome, программа для работы с фотографиями Picasa и программа 
                        мгновенного обмена сообщениями Hangouts. Кроме того, Google ведёт разработку мобильной операционной системы Android, 
                        используемой на большом количестве смартфонов, а также операционной системы Google Chrome OS и устройства Google Glass.
                        По данным Alexa, основной сайт Google — google.com — является самым посещаемым сайтом Интернета, а многочисленные международные
                        сайты Google входят в первую сотню по посещаемости, как и несколько других сайтов 
                        сервисов Google — YouTube, Blogger и Orkut. В мае 2011 года количество уникальных посетителей сайтов
                        Google за месяц впервые превысило 1 млрд человек</p>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;