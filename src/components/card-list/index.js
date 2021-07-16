import React from 'react'
import Card from '../card'
import { CardListContainer } from './CardListElements'


const CardList = ({ users }) => {
    return (
        <CardListContainer>
            {users.map(user => (
                <Card user={user} key={user.id}></Card>
            ))}
            
        </CardListContainer>
    )
}

export default CardList
