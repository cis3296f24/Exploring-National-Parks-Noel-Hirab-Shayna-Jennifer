/**
 * Renders the ParkPlan component page.
 * @component
 * @module Profile
 * @returns {JSX.Element} The rendered ParkPlan component.
 */
import React from 'react'
import ProfileComponent from './Profile/Components/ProfileComponent'
import './Style/profile.css'

const Profile = () => {
  return (
    <div className="park-plan">
      
      <ProfileComponent/>
      
    </div>
  )
}

export default Profile