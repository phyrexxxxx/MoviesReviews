import {Form, Button} from 'react-bootstrap';
import './ReviewForm.css';

const ReviewForm = ({handleSubmit, revText, labelText, placeholder}) => {
    return (
        <Form className="review-form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{labelText}</Form.Label>
                <Form.Control 
                    ref={revText} 
                    as="textarea" 
                    rows={3} 
                    placeholder={placeholder}
                />
            </Form.Group>
            <Button className="submit-btn" variant="primary" onClick={handleSubmit}>Submit</Button>
        </Form>
    )
}

export default ReviewForm;
