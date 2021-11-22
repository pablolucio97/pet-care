import { useEffect } from 'react'
import { Route, BrowserRouter, Switch, useLocation } from 'react-router-dom'

import Login from '../pages/Login/Index'
import Home from '../pages/Home/Index'
import { analytics } from '../services/firebase'

const RoutesListener = () => {
    const location = useLocation()
    useEffect(() => {
        analytics.setCurrentScreen(location.pathname)
    }, [location])
    return <></>
}

const Routes = () => {
    return (
        <BrowserRouter>
        <RoutesListener/>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes