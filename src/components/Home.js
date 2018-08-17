import { Card,Row,Col } from 'antd';
import Router from 'next/router'
import movieData from '../data/movieData'

const { Meta } = Card;

const onCardClick = (name, src, detail) => {
  return (e) => {
    e.preventDefault()
    Router.push({
      pathname: '/detail',
      query: {
        name,
        src,
        detail
      }
    })
  }
}

const renderCard = () => (
  movieData.map((idx)=>
  <Col span={5}><Card
  hoverable
  onClick={onCardClick(idx.name, idx.src, idx.detail)}
  style={{ width: 240 }}
  cover={<img alt={idx.name} src={idx.src} />}
>
  <Meta
    title={idx.name}
    description={idx.detail}
  />
</Card>
</Col>
))

const Homecard = () => (
    <div style={{ background: '#ECECEC', padding: '30px' }}>
      <Row type="flex" justify="space-around">
          {renderCard()}
    </Row>
  </div>
)

export default Homecard