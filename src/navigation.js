import React, { Fragment, Component } from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Head from './components/head'
import HomePage from './pages/HomePage'
import PostCommentsPage from './pages/PostCommentsPage'
import PostsByCategoryPage from './pages/PostsByCategoryPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CreateCategoryPage from './pages/CreateCategoryPage'
import CreatePostPage from './pages/CreatePostPage'
import AccountPage from './pages/AccountPage/index'
import ChangePasswordPage from './pages/ChangePasswordPage/index'
import ChangeAvatarPage from './pages/ChangeAvatarPage'
import UserContext from './Context'



class Navigation extends Component {

    static contextType = UserContext

    render(){
    const { loggedIn } = this.context 

        return(
            <Fragment>
                <Head />
                <BrowserRouter>
                    <Switch>
                        <Route  path="/postsByCategory/:categoryId/:categoryName" component = { PostsByCategoryPage } />
                        <Route exact path="/" component = { HomePage } />
                        <Route path="/PostComments/:postId" component = { PostCommentsPage } />
                        <Route path="/Register" component = { RegisterPage } />
                        <Route path="/CreateCategory" component = { loggedIn ? CreateCategoryPage : LoginPage } />
                        <Route path="/CreatePost/:categoryId/:authorId" component = { loggedIn ? CreatePostPage : LoginPage } />
                        <Route path="/Login" component = { LoginPage } />
                        <Route path="/Account" component = { AccountPage } />
                        <Route path="/ChangePassword" component = { ChangePasswordPage } />
                        <Route path="/ChangeAvatar" component = { ChangeAvatarPage } />
                    </Switch>
                </BrowserRouter>
            </Fragment>
        )
    }
}

export default Navigation