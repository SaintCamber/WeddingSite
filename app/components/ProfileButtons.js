



// i want to makt this into a drop down for aesthetics sake i think

export default function ProfileButtons(){

    <div className='ProfileContainer'>
    {userId && (<div className='profileOpen'><SignOutButton/></div>)}
    {!userId && (<>
        <Link className="profile"  href="/sign-in">Sign in</Link>
        <Link className="profile"  href="/sign-up">Sign up</Link>

    </>)}

    </div>

}
