import React, { Component } from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import Input from '../components/input'
import AddImage from '../components/addImage'
import SubmitBtn from '../components/submitBtn'

class CreateCategoryPage extends Component {
    constructor(props){
        super(props)

        this.state = {
            imageUrl: "",
            name: ""
        }
    }

    setImgUrl = (imageUrl) => {
        this.setState({imageUrl})
    }

    onChange = (event, type) => {
      const newState = {}
      newState[type] = event.target.value
  
      this.setState(newState)
    }

    handleSubmit = async(event) => {
        event.preventDefault()

        const{
            name,
            imageUrl
        } = this.state
        await fetch('http://localhost:9999/api/category/createCategory', {
            method: 'POST',
            body: JSON.stringify({
              name,             
              imageUrl
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((user) => {
            this.props.history.push('/')
        })
    }

    render(){
        const { name } = this.state
        return(
            <>
                <Header />
                    <div class = 'center'>
                        <form onSubmit = {this.handleSubmit}>
                            <Input       
                                value = {name}                         
                                onChange={(e) => this.onChange(e, 'name')}
                                label="Name"
                                id="name"
                            />
                            <AddImage setImgUrl = {this.setImgUrl}/>
                            <SubmitBtn name = 'Create' />
                        </form>
                    </div>
                <Footer />
            </>
        )
    }
}

export default CreateCategoryPage