import React, { useState } from 'react';
import { Box ,styled} from '@mui/system';
import Sunset from '../Image/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '80%'
    
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'
})

function Homepage(props) {
    const [result, setResult] = useState({});
    return (
         <Component>
            <Image></Image>
            <Box style={{ width: '73%', height: '80%' }}>
                <Form setResult={setResult} />
                <Information result={result} />
            </Box>
        </Component>
    );
}

export default Homepage;