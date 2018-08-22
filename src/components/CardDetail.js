import { Card,Col } from 'antd'

const { Meta } = Card;

const CardDetail = ({data, onCardClick, index}) => (
    <Col key={`col-card-${index}`} span={5}>
      <Card
        hoverable
        onClick={onCardClick ? onCardClick(data.name, data.src, data.date) : null}
        style={{ width: 240 }}
        cover={<img alt={data.name} src={data.src} />}
      >
        <Meta
          title={data.name}
          description={`วันที่เข้าฉาย: ${data.date}`}
        />
      </Card>
    </Col>
)
export default CardDetail