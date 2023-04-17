import { Container } from '@material-ui/core'
import React from 'react'
import ThankYou from '../../Images/ThankYou.png';
function Thank() {
    return (
        <>
            <Container>
                <center>
                    <img src={ThankYou} style={{ height: '275px' }} />
                </center>
            </Container>
        </>
    )
}

export default Thank