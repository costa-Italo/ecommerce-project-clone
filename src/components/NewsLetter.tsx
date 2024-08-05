import React from 'react'
import InstagramImages from './InstagramImages'
import NewsletterForm from './NewsletterForm'

const NewsLetter = () => {
    return (  

        // CONTAINER
        <div className='bg-gray-100 flex flex-col justify-center items-center p-10'>
            <h1 className='text-zinc-950 font-medium text-5xl'>Follow products and discounts on Instagram</h1>

            <div>
                <InstagramImages />
            </div>

            <h1 className='text-zinc-950 font-medium text-5xl mt-10'>Or Subscribe To The Newsletter</h1>

            <NewsletterForm />
            
        </div>
    )
}

export default NewsLetter
