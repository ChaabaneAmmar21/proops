import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './logo.svg'
import PropTypes from 'prop-types';
const x=props =>{
    return<>  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{props.fullName}</Card.Title>
      <Card.Text>
       {props.bio}<br></br>
       {props.profession}
      </Card.Text>
      <Button variant="primary">{props.children}</Button>
    </Card.Body>
  </Card>
    </>
   
}
export default x
 x.propTypes = {
 
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
   
  }