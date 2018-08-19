import { Card,Col } from 'antd'

const { Meta } = Card;

const CardDetail = ({data, onCardClick}) => (
  data.map((value, index)=>
    <Col key={`col-card-${index}`} span={5}>
      <Card
        hoverable
        onClick={onCardClick(value.name, value.src, value.detail)}
        style={{ width: 240 }}
        cover={<img alt={value.name} src={value.src} />}
      >
        <Meta
          title={value.name}
          description={value.detail}
        />
      </Card>
    </Col>)
)
export default CardDetail