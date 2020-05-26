import React from 'react';
import { connect } from 'react-redux';
import {useState} from "react";
import { addItem } from '../../redux/cart/cart.actions';
import {Modal,Carousel} from "react-bootstrap";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';


function Example(flag) {
  const [show,setShow] = useState(flag);
  return(
  <div>
  <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>

  <Modal
  show={show}
  onHide={() => setShow(false)}
  dialogClassName="modal-90w"
  aria-labelledby="example-custom-modal-styling-title"
  style={{opacity:1}}
>

  <Modal.Header closeButton>
    <Modal.Title id="example-custom-modal-styling-title">
      CURRENT BASE PIC
    </Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/DKVmb3R/wolverine7u-mv.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>TH12 ALMOST MAXED ACC</h3>
      <p>Get this base cheap af @6500 only</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/ZLhZbTM/wolverine7u-nc.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Almost max everything</h3>
      <p>Has an exciting profile as well</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/BTpr301/wolverine7u-pr.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>BH OP TOO</h3>
      <p>Builder hall is op too. </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  </Modal.Body>
</Modal> </div>)
}

// ({ item, addItem })
 export class CollectionItem extends React.Component {
  state = {
    flag: false
  }

  handlePopup() {
    this.setState({flag: true});
  }

  render(){
    const {item, addItem} = this.props;
    const {flag} = this.state;
    const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer >{name}</NameContainer>
        <PriceContainer>₹{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
      {flag && <Example flag={true}/>}
    </CollectionItemContainer>
  );
  }
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
