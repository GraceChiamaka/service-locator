import React from 'react';
import Header from '../../common/Navigation/Header/Header';
import Footer from '../../common/Navigation/Footer/Footer';
import Layout from '../../common/Layout/Layout';
import Aux from '../../hoc/hoc';

const home = (props) => {
    return(
        <Aux>
            <Header />
            <Layout>
                
            </Layout>
            <Footer/>
        </Aux>
    )
}

export default home;