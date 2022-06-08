import React from 'react'

const Loading = (Component) => {
    return function LoadingWithComponent(props) {
        if (props.isLoading) {
            return <h2>Loading....</h2>
        } else {
            return <Component data={props.data} />
        }
    }
}

export default Loading
