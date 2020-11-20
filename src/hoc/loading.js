import React, { Component } from 'react';

function isEmpty(data) {
    if (data && data instanceof Array) {
        return data.length === 0;
    }
    if (data) {
        return Object.keys(data).length === 0;
    }
    return false;
}

export default function (prop) { // current example, prop="products"
    return function (OldComp) {
        return class NewComp extends Component {
            render() {
                return (
                    isEmpty(this.props[prop]) ?
                        <h1 style={{ maxHeight: "100px" }} className="text-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </h1> :
                        <OldComp {...this.props} />
                );
            }
        }
    }
}


// carrier as ES6 arrow function, that returns a HOC
export const loading = (prop) => (OldComp) => (props) => (
    isEmpty(props[prop]) ?
        <h1 className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </h1> :
        <OldComp {...props} />
);
