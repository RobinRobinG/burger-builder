import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import ContactDataStyle from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render() {
        return (
            <div className={ContactDataStyle.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={ContactDataStyle.input} type="text" name="name" placeholder="Your name" />
                    <input className={ContactDataStyle.input} type="email" name="email" placeholder="Your email" />
                    <input className={ContactDataStyle.input} type="text" name="street" placeholder="Street" />
                    <input className={ContactDataStyle.input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" click={this.orderHandler}>Order</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;