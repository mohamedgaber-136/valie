import MetaComponent from '@/components/common/MetaComponent'
import Footer1 from '@/components/footers/Footer1'
import Header1 from '@/components/headers/Header1'
import MobailHeader1 from '@/components/headers/MobailHeader1'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../public/assets/imgs/Logo/Logo bg.png'
export const MainRegister = () => {
    const metadata = {
        title:
          "Register || Maviways Chauffeur Limousine Transport and Car Hire ",
        description:
          "Maviways Chauffeur Limousine Transport and Car Hire ",
      };
  return (
    <>
          <MetaComponent meta={metadata} />
              <Header1 />
               <MobailHeader1 />
              <main className="main d-flex flex-column my-5 py-5 justify-content-center align-items-center gap-4">
                <div className="d-flex my-5 py-5 justify-content-center align-items-center flex-wrap gap-4">

              <Link to={'emailVerify'} className="btn btn-search">Register By Email</Link>
              <Link to={'phoneVerify'} className="btn btn-search">Register By Phone Number</Link>
                </div>
              </main>
              <Footer1 />

    </>
  )
}
