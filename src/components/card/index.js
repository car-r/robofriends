import React from 'react'
import { 
    CardContainer, 
    Image, 
    CardName,
    CardNickName, 
    Email } from './CardElements'

const Card = ({user}) => {
    return (
        <CardContainer key={user.id}>
            <Image src={`https://robohash.org/${user.id}set=set2/?size=180x180`} alt={'monster'}/>
            <CardName>{user.name}</CardName>
            <CardNickName>Nickname: {user.username}</CardNickName>
            <Email>{user.email}</Email>
        </CardContainer>
    )
}

export default Card
