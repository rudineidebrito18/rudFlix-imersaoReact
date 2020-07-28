import React from 'react'

export default (props) => {
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}