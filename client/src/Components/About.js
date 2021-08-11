import React from 'react'

import Nav from './Nav'
import Menu from './Menu'

import '../css/About.css'

function About() {
  return (
    <div>
      <Menu />
      <Nav />
      <h1 className='about__heading'>About</h1>
      <div className='about'>
        <div className='about__container'>
          <h2 className='about__h2'>About the Owner</h2>
          <p className='about__text-content'>
            Harold DeStefano is an entrepreneur with experience in a wide
            variety of trades. A survivor of a devestaing accident back in the
            early 90’s that left him physically and financially challenged. The
            total opposite lifestyle that he had become use to up to his early
            20’s. Learning how to adjust and accept a new direction in life,
            patience and rehabilitation added to his character. Having to
            relocate not far from where he was thriving put him smack in the
            middle of the Amish and Mennonite community in Lancaster County. The
            plain community soon got to know him. He built relationships and
            trust with many of the native Lancaster County people. Getting to
            know them and their families he helped a lot of people to understand
            what he thought as common knowledge from the “outside.” During this
            time most plain community businesses didn’t reach out to do business
            outside of their community, accept for the tourist shops that drew
            in people from all over the country. Harold learned a different kind
            of value of life by being involved with this thriving culture of
            Lancaster County. He spent a lot of time side by side with hard
            working people, eating dinner with them, talking with them even
            attending weddings and funerals that were rare for any English to
            see accept for reinactments on TV. Harold witnessed many homes and
            barns being built after a devastating fire that destroyed them. Once
            being a tourist himself Harold has a unique understanding from the
            point of view of looking in from the outside and looking out from
            the inside. Learning the value of proving your worth first Harold
            built one of his businesses selling natural supplements by sending
            out free samples offered by other companies directly to his
            customers. Harold has helped many Lancaster County businesses grow
            and expand by opening borders of communications and understanding as
            well as knowledge. Harold got to know so many young families in the
            community that now the next generation occupy the homes and
            businesses he spent time learning from in the past. Harold started
            out learning about business as a kid expanding his paper routes and
            later on working as a dish washer. Before his life changing accident
            Harold had received a degree in computer technology and was involved
            in law enforcement where he grew up. Also before his accident in the
            early 90’s he worked more than one job at a time while pursuing his
            would be career as a private detective. Harold was an electronics
            bench tech at a well known repair center in Reading PA putting his
            earlier schooling to use. Harold never thought he would be going
            from that life to learning about farming, milking cows and carpentry
            and all the values in life that goes with those trades. Harold works
            with businesses in Lancaster County providing business consulting
            services, email to fax services, website development, customer
            relations, construction leads and much more. Harold helps businesses
            with hiring and staffing as well as keeping these businesses
            functioning efficiently with mixed cultures working together.
          </p>
        </div>
        <div className='about__container'>
          <h2 className='about__h2'>Company Mission Statement</h2>
          <p className='about__text-content'>
            Our main goal is to help local owned businesses to provide a more
            efficient way to operate and at the same time have smooth operations
            between departments within the same company. We focus on employee
            relations and staffing by first finding what everyone has in common
            no matter where they came from. Using our own businesses models as
            examples we build trust that helps define our intentions. We thrive
            in helping local businesses to operate better utilizing all our
            business services.
          </p>
        </div>
      </div>
      <footer className='footer_copyright'>
        Hosted by De Stefano Enterprises, LLC, all rights reserved
      </footer>
    </div>
  )
}

export default About
