import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { personOutline } from 'ionicons/icons';
import { bagHandleOutline } from 'ionicons/icons';



function Navbar() {
  return (
    <header className='fixed w-full bg-white z-10'>
      <div className='flex justify-between px-32 py-4'>
        <div className='flex gap-16'>
          <div>Logo</div>
          <div>
            <nav className='flex gap-8 list-none'>
              <li>HOME</li>
              <li>SALAD</li>
              <li>MEMBERSHIP</li>
              <li>CUSTOMIZE</li>
              <li>CONTACT</li>
            </nav>
          </div>
        </div>
        <div>
          <nav className='flex gap-6 text-2xl list-none'>
            <li>
              <IonIcon icon={searchOutline} />
            </li>
            <li>
              <IonIcon icon={bagHandleOutline} />
            </li>
            <li>
              <IonIcon icon={personOutline} />
            </li>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar