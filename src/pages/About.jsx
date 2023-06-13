import React, { useContext } from 'react'

const About = () => {
    return (
        <>

            <div className="container" style={{ minHeight: "calc(100vh - 184px)" }}>
                <h2 style={{ textAlign: "center", padding: "10px 0px 30px 0px" }}>NoteVault : Vault Your Notes, Unlock Your Potential</h2>
                <div className="text">

                    Welcome to NoteVault - Your fortress for ideas  <br /><br />

                    <strong> Key Features:</strong>
                    <ul>
                        <li>Secure Storage:</li>
                        <li>Easy Organization</li>
                        <li>Seamless Syncing</li>
                        <li>Customization</li>
                    </ul>
                    <strong>Your Notes, Your Way:</strong>
                    <ul>
                        <li>
                            Whether you're a student, professional, creative thinker, or someone who values efficient organization, NoteVault is designed to cater to your unique needs
                        </li>
                        <li>
                            From meeting notes and project ideas to personal goals and creative inspirations, NoteVault helps you capture and organize it all in one central hub.
                        </li>
                        <li>
                            Joy of capturing and organizing your thoughts in a clutter-free and secure environment.
                        </li>

                    </ul>
                    <strong> Start Your NoteVault Journey Today: </strong>
                    <ul>
                        <li> Sign up for a free account and begin your journey towards efficient notekeeping. </li>
                        <li>Discover the freedom and convenience of having your notes securely stored, organized, and accessible whenever you need them.</li>
                    </ul>


                    Unleash the power of your notes with NoteVault - your trusted digital notekeeping solution.
                </div>

            </div >
        </>
    )
}

export default About