import {Route, BrowserRouter, Switch} from 'react-router-dom'

import Login from '../pages/Login/Index'
import Home from '../pages/Home/Index'
import Register from '../pages/Register/Index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/home' component={Home}/>
                <Route path='/new-pet' component={Register}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes