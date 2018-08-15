import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FoodContainer from '../../containers/Food';
import RestaurantContainer from '../../containers/Restaurant';
import OrderContainer from '../../containers/Order';
import DashboardContainer from '../../containers/Dashboard';

const ContentRouter = props => {
    return (
        <Switch>
            <Route path="/" exact component={DashboardContainer} />
            <Route path="/restaurants" component={RestaurantContainer} />
            <Route path="/foods" component={FoodContainer} />
            <Route path="/orders" component={OrderContainer} />
        </Switch>
    )
}

export default ContentRouter