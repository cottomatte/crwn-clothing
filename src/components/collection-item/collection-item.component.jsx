import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addToCart } from '../../redux/cart/cart.actions'

import './collection-item.styles.scss'

const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => {
    console.log('id: ', id)
    console.log('name: ', name)
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addToCart({ id })}>
                Add to cart
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addToCart: item => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
