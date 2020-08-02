import React, {Fragment} from 'react';
import OurProject from '../../components/OurProjects/OurProjects';
import Services from '../../components/Services/Services';
import HeadImage from '../../components/HeadImage/HeadImage';

function Home(){
    return(
        <Fragment>
        <HeadImage/>
        <Services />
        <OurProject />
        </Fragment>
    )
}

export default Home;