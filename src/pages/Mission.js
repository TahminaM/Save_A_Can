import Mission1 from '../images/m1.jpg';
import Mission2 from '../images/m2.jpg';
import Mission3 from '../images/m3.jpg';
import Mission4 from '../images/m4.jpg';
import MissionData from './MissionData';
import './MissionStyle.css'

const Mission =() =>{
    return(
        <div className="Mission">
            <h1 style={{color: "black"}}>Save A Can Mission</h1>
            <p>We aim to make recycling app accessible to everyone. We will increase awareness and participation in recycling efforts to help reduce waste and promote a more sustainable future. One mission of our app is to educate users about recycling. This could involve providing information about what materials can be recycled, how to properly sort and dispose of recyclables, and the environmental benefits of recycling. 
            Another mission is to make recycling more convenient for users. This involves providing information about local recycling programs and drop-off locations, as well as offering tools to help users schedule pickups and track their recycling progress.
            We aim to use gamification to encourage users to recycle more. This involves setting up challenges and competitions, rewarding users for hitting certain recycling goals, and providing social sharing features to help users compete and connect with others.
            </p>




          <MissionData
          className="first-des"
          heading="Our Goal"
          text="The goal of our recycling app is to encourage and simplify recycling practices for individuals and communities, in order to reduce waste and promote sustainable living. The app will provide users with a user-friendly interface that allows them to identify recyclable materials, learn how to properly dispose of them, and track their recycling progress. Additionally, the app will incentivize recycling through rewards and gamification elements, making it more engaging and motivating for users to participate in eco-friendly behaviors. By making recycling more accessible and appealing to a wider audience, our app aims to contribute to a larger movement towards environmental responsibility and stewardship. Ultimately, our goal is to help create a world where waste reduction and sustainability are key priorities for everyone. "
          img1= {Mission1}
          img2= {Mission2}
        />


       <MissionData
          className="first-des-reverse"
          heading="Environmental Impact"
          text="The Environmental Impact of a recycling app can be significant, but it ultimately depends on various factors. On the positive side, a recycling app can encourage individuals and households to recycle more by making the process more accessible and convenient. By providing information on what can be recycled and where, the app can help reduce contamination and ensure that materials are properly sorted, increasing the likelihood of successful recycling. Additionally, a recycling app can reduce the need for physical flyers or mailings, saving paper and reducing carbon emissions from transportation. However, the creation and maintenance of the app itself also have an environmental impact, including the energy required for data centers and servers, as well as the production and disposal of electronic devices used to access the app. Therefore, it is essential to consider the overall lifecycle impact of a recycling app, including its development, use, and disposal, to fully understand its environmental impact.           "
         
        img1= {Mission3}
        img2= {Mission4}
        />




        </div>


    );
};


export default Mission