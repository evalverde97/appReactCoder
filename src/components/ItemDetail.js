// vista expandida del item con detalle y precio

function ItemDetail({item}) {
    return (
        <Container>
          <Row>
            <Col>
                <h1>{item?.title}</h1>
                <img src={item?.pictureUrl} alt={item.title} />
                <p>{item?.description}</p>
                <p>{item?.price}</p></Col>
            <Col> 2 of 2 </Col>
          </Row>
            <Row>
            <Col>1 of 1</Col>
            <Col> 2 of 2 </Col>
          </Row>
        </Container>
    )
};

