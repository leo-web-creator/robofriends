import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }

    // Komponen LIFE CYCLE baru yang mulai ada id React versi 16 (componentDidCatch)
    // Jika ada ditemukan error dalam coding maka otomatis akan dijalankan method ini (componentDidCatch)
    // LIFE CYCLE hanya ada di CLASS
    componentDidCatch() {
        this.setState({ hasError: true})
    }
    
    render() {
        if (this.state.hasError) {
            return (
                <h1>Oops, that is not good for the user to see!!!</h1>
            )
        }
        return ( 
            // Jalankan "children props" = jalankan apa saja yang "in between / diantara" <errorBoundry> tag nantinya
            this.props.children
        )
    }
}

export default ErrorBoundry
