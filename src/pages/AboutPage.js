import React from 'react';
//import Mission from './Mission';
//import Blog from './Blog';
//import img2 from '../images/About1.jpg';
//import img3 from '../images/headshot.jpeg';

function AboutUsPage(props) {
	const profiles = [
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Tahmina Munni",
			college: "CUNY - Hunter College",
			LinkedIn: "https://www.linkedin.com/in/tahminamunni/",
			role: "Front-End Developer",
			email: "Tahmina.munni49@myhunter.cuny.edu"
		},
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Pakeeza Rashid",
			college: "CUNY - Hunter College",
			LinkedIn: "https://www.linkedin.com/in/pakeeza-rashid-b44b24221/",
			role: "ML Developer",
			email: "Pakeezarashid27@gmail.com"
		},
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Christopher Mena",
			college: "CUNY - Hunter College",
			LinkedIn: "https://www.linkedin.com/in/chrismenatavares/",
			role: "ML Developer",
			email: "christopher.mena66@myhunter.cuny.edu"
		},
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Yosef Samman",
			college: "CUNY - Hunter College",
			LinkedIn: "",
			role: "Back-End Developer",
			email: "yosef.samman5@gmail.com"
		},
		{
			image: "https://media.discordapp.net/attachments/1029905103693557790/1029905777793716274/IMG_20220625_212456_479.jpg?width=511&height=511",
			name: "Robert Szabo",
			college: "CUNY - Hunter College",
			LinkedIn: "https://www.linkedin.com/in/robert-szabo-b28a66159/",
			role: "Back-End Developer",
			email: "robertmszabo@gmail.com"
		}
	]
	return (
		<div className='AboutPage container'>
			<div className="about-us-page">
				<h1 className="textOnImg">Our Story</h1>
				<div className="about-paragraph">
					<p>'Save A Can' website was built by Hunter College students with the purpose of promoting Recycling in NYC </p>
					<p style={{color: "gray"}}>
						Unsure if an item can be recycled? Use the app's built-in scanner to scan the barcode of the item and find out if it can be recycled and where.
                        <br/>
                        Find recycling locations near you using your current location or by searching for a specific address. The app will show you the nearest recycling centers, including which materials they accept.
                        <br/>
						Learn about recycling best practices, including how to properly sort and prepare your recyclables.
						<br/>
						Keep track of your recycling progress over time and see how your efforts are making a positive impact on the environment.
						<br/>
						Connect with other environmentally conscious individuals and organizations in your community through the app's forum and events section. 
						<br/>
						Whether you're a seasoned recycler or just getting started, GreenBin makes it easy to reduce your environmental footprint and make a positive impact on the planet.                 
						</p>
				</div>

				<div className='profile-container'>
					{profiles.map((profile, key) => (
						<div key={key} className="profile">
							<img src={profile.image} alt="profile 1" />
							<h3 className='mt-2'>{profile.name}</h3>
							<p>{profile.role}</p>
							<p>{profile.college}</p>
							<p style={{ textTransform: "lowercase" }}>{profile.email}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default AboutUsPage;