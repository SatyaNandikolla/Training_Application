import React, { Component, useState } from 'react'

function WithCounter2(OriginalComponent, initialCount) {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
    
            this.state = { count: initialCount }
            
            this.incrementCount = this.incrementCount.bind(this);
            this.decrementCount = this.decrementCount.bind(this);
        }

        incrementCount() {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        decrementCount() {
            this.setState(prevState => {
                return { count: prevState.count - 1 }
            })
        }
        
        render() {
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
        }
    }

    return NewComponent
}

export default WithCounter2
