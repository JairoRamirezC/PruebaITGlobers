import React from 'react'
import Items from '../../common/listItems/ListItems.json'

export default function Navbar({handleClick}) {
    
    return (
        <nav className='navbar'>
            <div className='navbar-sectionLogo'>
                <img src="//itglobers.com/wp-content/uploads/2020/05/cropped-it-globers-logo.png" alt="Logo_ITGlobers" className='navbar-logo'/>
            </div>
            <ul className='navbar-sectionItems'>
                {
                    Items.map(({id, name}) => (
                        <li key={id} className='navbar__Items' onClick={() => handleClick(name)}>{name}</li>
                    ))
                }
            </ul>
        </nav>
    )
}
