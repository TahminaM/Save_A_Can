import React from 'react'
import ai from '../images/ai.jpeg'

const HomePage = (props) => {

    const openStudentsPage = url => {
        window.open(url, "_self")
    }
    const openTeachersPage = url => {
        window.open(url, "_self")
    }
    const openLeadersPage = url => {
        window.open(url, "_self")
    }

    return (
        <div className='HomePage container'>
            <div className='left'>
                <div>
                    <h1>
                        Welcome to <span>Save A Can</span> !!
                        <br />
                        Recycing For All NYC Residents.
                    </h1>
                    <p>
                    The one-stop destination for all NYC residents who want to make a positive impact on 
                    the environment by recycling. Our easy-to-use app makes it simple and convenient for you to 
                    recycle your cans and other materials in an eco-friendly way.
                    </p>
                </div>
                <div className='buttons-container'>
                    <h4>Explore Our Solutions to Your Community!</h4>
                    <div>
                        <button onClick={() => openStudentsPage('/students')} className='bg-hover'>
                            Collection points
                        </button>
                        <button onClick={() => openTeachersPage('/teachers')} className='bg-hover'>
                            Sorting Guide
                        </button>
                        <button onClick={() => openLeadersPage('/leaders')} className='bg-hover'>
                            Collection Calendar
                        </button>
                    </div>
                </div>
            </div>
            <div className='right'>
                <img src={ai} alt="ilustrator-home" />
            </div>
        </div>
    )
}

export default HomePage
